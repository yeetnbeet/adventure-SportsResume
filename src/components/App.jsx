import React, { Component } from 'react';
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Resume from './Resume.jsx';

import { Route, withRouter } from 'react-router-dom';


class App extends Component{
    render() {
        console.log(this.props)
        return (
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home}/>
                <Route exact path="/resume" component={Resume} />
            </div>
        );
        
    }
}

export default withRouter(App);