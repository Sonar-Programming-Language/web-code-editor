import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './screens';
import AppContextProvider from './context';
import Navbar from './components/composites/Navbar';

function App() {
  return (
    <AppContextProvider>
      <div className={`cd_app_level_elm cx_scrollbar`}>
        <Navbar />
        <BrowserRouter>
            <Switch>
              <Route path={'/'} component={ Homepage } />
            </Switch>
        </BrowserRouter>
      </div>
    </AppContextProvider>
  );
};

export default App;
