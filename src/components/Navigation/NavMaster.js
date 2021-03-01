import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import NavBarPlatform from './NavBarPlatform'
import FilterBar from './FilterBar'
import Routes from '../Routes/Routes'

class NavMaster extends Component { 
    render() { 
        return (
            <>
                {/* <Routes /> */}
                <NavBarPlatform />
                <FilterBar />
            </>
        )
    }
}

export default withRouter(NavMaster) 