import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { push as Menu } from 'react-burger-menu'

import UserGroup from '../Sidebar/UserGroup'
import SearchBar from '../Sidebar/SearchBar'
import SidebarBottom from '../Sidebar/SidebarBottom'
import FilterGroup from '../Sidebar/FilterGroup'
import NavKPI from '../KPI/NavKPI'

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  })

class NavBarPlatform extends Component { 
    state = { 
        leftSearch: true 
    }

    onMouseOut = e => { 
        this.setState({ leftSearch: false })
    }

    onMouseIn = e => { 
        this.setState({ leftSearch: true })
    }

    render() { 
        return (
            <div className="slider_container">
                <Menu>
                    <div className="fs-20 text_bold padding-top--medium padding-bottom--medium">
                        <UserGroup initials={this.props.initials} scope="X" />
                    </div>
                    <div
                        className="padding-top--medium padding-bottom--medium grey_border_top"
                        style={{ fontSize: "15px", color: "white" }}
                    >
                        <NavKPI />
                        {/* catalogueLength={this.props.catalogueLength} goProds={this.props.go} noGoProds={this.props.noGo}/> */}
                    </div>
                    <div className="padding-top--medium padding-bottom--medium grey_border_top" 
                         onMouseLeave={this.onMouseOut} onMouseEnter={this.onMouseIn} >
                        <SearchBar
                            // searchData={this.props.searchData}
                            // handleSearchClick={this.props.handleSearchClick}
                            // searchFilters={this.props.searchFilters}
                            // leftSearch={this.state.leftSearch}
                        />
                    </div>
                    <div>
                        <FilterGroup
                            // selected={this.props.selected}
                            // handleCurrencyChange={this.props.handleCurrencyChange}
                            // handleSortChange={this.props.handleSortChange}
                            // handleLineFilter={this.props.handleLineFilter}
                            // handleChannelFilter={this.props.handleChannelFilter}
                            // handleGoNoGoFilter={this.props.handleGoNoGoFilter}
                            // handleHighlightFilter={this.props.handleHighlightFilter}
                            // scope={this.props.scope}
                            // filters={this.props.filters}
                            // filterOptions={this.props.filterOptions}
                            // newLine={this.props.newLine}
                        />
                    </div>
                    <div>
                        <SidebarBottom />
                    </div>
                </Menu>
            </div>
        )
    }
}

export default withRouter(NavBarPlatform)