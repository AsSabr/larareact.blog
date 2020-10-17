import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";

import Header from "./components/partials/Header";
import Sidebar from "./components/partials/Sidebar";
import Footer from "./components/partials/Footer";
import Routes from "./Routes";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Header/>
                    <Sidebar/>
                    <Routes/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

// export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
