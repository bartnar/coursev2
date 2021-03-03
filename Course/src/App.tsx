import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Wrapper}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
