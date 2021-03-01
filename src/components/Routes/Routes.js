import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../Pages/Home'

class Routes extends Component { 
    render() { 
        return (
            <Switch>
                <Route exact path="/" render={props => <Home />}/>
            </Switch>
        )
    }
}

export default withRouter(Routes)