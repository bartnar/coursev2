import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Header}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
