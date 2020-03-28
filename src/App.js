import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import About from "./About";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
