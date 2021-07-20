import { useContext } from "react";
import Dropdowns from "../../elements/Dropdowns";
import { AppContext } from '../../../context';
import CommonButton from "../../elements/Buttons/CommonButton";

const EXAMPLES = [
    { title: 'variables', type: 'variables' },
    { title: 'functions', type: 'functions' },
    { title: 'Function example: is even number', type: 'is_even_number' },
    { title: 'while loop', type: 'while_loop' },
    { title: 'Nested While loop example: multiplication table', type: 'nested_while_loop' }
];

export default ({ show, dismissButton, onDismiss, mobileView, classes }) => {
    const context = useContext(AppContext);


    const setCodeEditor = (type) => {
        let value = '';
        type = type.toString().toLowerCase();
        switch(type) {
            case 'variables':
                value=`$i = 0;

$name = 'Icheka Ozuru';

$age = 100;

print age + 1;

print 'Hi ' + name '!';

print i + (1 * age);
`;
                    context.setCodeContent(value);
                    updateContextCodeEditorValue(value);
                break;
                case 'functions':
                    value=`def sayMyName@name@ => {
    print name;
};

$name = 'Samurai Jack';
sayMyName@name@;



print 'Another example...';

def loop@i, max@ => {
    if (i >= max) {
        print '<i> cannot be equal to or greater than <max>!';
    } else {
        while (i < max) {
            print i;
            i = i + 1;
        };
    };
};

$i = 0;
$max = 100;
loop@i, max@;
`;
                        context.setCodeContent(value);
                        updateContextCodeEditorValue(value);
                    break;
                case 'is_even_number':
                    value=`def isEvenNumber@num@ => {
    if (num % 2 == 0) {
        print num ' is even!';
    } else {
        print num + ' is odd!';
    };
};


$num = 20;
isEvenNumber@num@;

isEvenNumber@15@;
`;
                        context.setCodeContent(value);
                        updateContextCodeEditorValue(value);
                    break;
                case 'while_loop':
                    value=`print 'Simple While Loop example -';
$i = 0;
while i < 5 {
    print 'i is ' + i;
    i = i + 1;
};
`;
                        context.setCodeContent(value);
                        updateContextCodeEditorValue(value);
                    break;
                case 'nested_while_loop':
                    value=`print 'Nested While Loop example -';
print 'Multiplication Table';

$m = 2;
$i = 1;
while (m <= 12) {
    print '';
    print m + ' Times Table';
    while (i <= 12) {
        print m + ' * ' + i + ' = ' + (m * i);
        i = i + 1;
    };
    i = 1;
    m = m + 1;
};
`;
                        context.setCodeContent(value);
                        updateContextCodeEditorValue(value);
                    break;
            default:
                return alert('You did not specify an appropriate type for Examples Options!!!');
        };
    };

    const renderExamples = () => {
        return EXAMPLES.map(example => (
            <div className={`border-bottom border-muted pb-0 pt-2`}>
                <CommonButton title={example.title} onClick={() => setCodeEditor(example.type)} classes={`d-block text-left h2 text-uppercase`} />
            </div>
        ));
    };

    const updateContextCodeEditorValue = value => context.updateContext({
        ...context, code: value
    });


    return !!mobileView ? (
        <Dropdowns classes={`example-dropdown pb-3 ${classes}`} show={show} dismissButton={dismissButton} onDismiss={() => onDismiss()}>
            { renderExamples() }
        </Dropdowns>
    ) : (
        <Dropdowns classes={`example-dropdown pb-3 rounded-0 border-0 ${classes}`} show={show} dismissButton={dismissButton} onDismiss={() => onDismiss()}>
            { renderExamples() }
        </Dropdowns>
    );
};