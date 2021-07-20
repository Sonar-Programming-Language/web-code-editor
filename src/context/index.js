import { Component, createContext } from 'react';
import { Program } from 'pl2_core';

export const AppContext = createContext();


export default class AppContextProvider extends Component {
    constructor(props) {
        super(props);

        const ob = {
            codeEditor: {
                colors: {
                    errors: 'red',
                    warnings: 'amber',
                    success: 'lightgreen'
                }
            },
            code: '',
            logs: '',
            program: '',
            updateContext: cx => this.setState({ ...cx }),
            executeProgram: () => this.execute(),
            setCodeContent: (content) => this.setState({ ...this.state, code: content })
        };

        this.state = { ...ob };
    };

    execute() {
        const program = new Program(this.state.code);
        const logs = program.interpreter.parser.log.values;

        // console.log("logs :>>", logs);
        // console.log('Type of Logs :>>', Array.isArray(logs));

        this.setState({
            ...this.state,
            logs,
            program
        });
    };

    render() {
        const context = {
            ...this.state
        };

        return (
            <AppContext.Provider value={{ ...context }}>
                {this.props.children}
            </AppContext.Provider>
        );
    };
};