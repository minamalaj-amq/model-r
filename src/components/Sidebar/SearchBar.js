import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const initialState = { isLoading: false, results: [], value: "", open: false }

class SearchBar extends Component { 

    state = { isLoading: false, results: [], value: "", open: false };

    handleResultSelect = (e, {result}) => { 
        this.props.handleSearchClick(result)
    }

    handleMouseDown = () => { 
        this.setState({ open: false })
    }

    handleMouseIn = () => { 
        this.setState({ open: true })
    }

    onMouseOut = event => { 
        let e = event.toElement || event.relatedTarget
        // console.log(event.target.getBoundingClientRect().x, event.target.getBoundingClientRect().y)
        // console.log("Closing Search")

        if (e.parentNode == this || e == this) {
          return
        }

        this.setState({ open: false, results: [], value: "" })
    }
    
    handleSearchChange = (e, {value}) => { 
        this.setState({ isLoading: true, value, open: true })

        setTimeout(() => {
            if (this.state.value.length < 1) { 
                this.setState(initialState) 
            }

            const re = new RegExp(_.escapeRegExp(this.state.value), "i")
            const isMatch = result => re.test(result.title)

            const filteredResults = _.reduce(
                this.props.searchData, 
                (memo, data, name) => { 
                    const results = _.filter(data.results, isMatch)
                    if (results.length) memo[name] = { name, results }

                    return memo 
                }, {})

                this.setState({ isLoading: false, results: filteredResults })
        }, 300)

        // handleRequestClose = () => { 
        //     this.setState({ open: false })
        // }
    }

    render() { 
        const { isLoading, value, results } = this.state
        var searchItems = []

        // Object.keys(this.props.searchFilters).forEach(key => { 
        //     searchItems = [...searchItems, ...this.props.searchFilters[key]]
        // })

        // let resultsFiltered = {...results}

        // // When you get real data, test and change this: o to be a more representative name 
        // let resultsFilteredTest = _.map(resultsFiltered, (value, key) => {
        //     let o = {...value}

        //     let filteredSearchResults = _.filter(o.results, (value) => {
        //         return !searchItems.includes(value.title)
        //     })

        //     o.results = filteredSearchResults
        //     o.resultsCount = filteredSearchResults.length
        //     o.Update = true

        //     return o
        // })

        // resultsFilteredTest = _.filter(resultsFilteredTest, (value) => {
        //     return value.resultsCount > 0
        // })
       
        return (
            <div className="position_relative" style={{ height: "40px" }}>
                <div
                    className="padding-left--35px padding-right--35px searchContainer"
                    onMouseLeave={this.onMouseOut}
                    onMouseEnter={this.handleMouseIn}
                >
                    <Search
                        category
                        value={value}
                        loading={isLoading}
                        showNoResults={false}
                        // results={resultsFilteredTest}
                        onFocus={this.handleMouseIn}
                        onResultSelect={this.onMouseOut}
                        onResultSelect={this.handleResultSelect}
                        open={value.length > 0 ? true : false}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true,
                        })}
                        style={{ fontSize: "15px", color: "white" }}
                        placeholder="Search..."
                        {...this.props}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar 

       