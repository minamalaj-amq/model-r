import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
}))

const FilterBar = props => {

    const classes = useStyles()

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

        return (
            <>
                <div className="filterpill_container width_100perc offwhite_background">
                    <div className={classes.root}>
                    {/* <ul className="scroll">
                        {this.props.selected.map(func => (
                            <Chip
                            style={{marginLeft :"2px"}}
                            key={"page"}
                            label={"Function : " + func.Function}
                            className="filterChip"
                            style={{ backgroundColor: "#2b2a28", color: "#ffffff" }}
                            // onDelete={(e) => this.props.handleChipRemove(func.Function)}
                        />
                        ))}
                        {Object.keys(this.props.filters).map((key, index) => {
                        let KeyTitleCase = key[0].toUpperCase() + key.slice(1);

                        if (this.props.filters[key].length > 4) {
                        return (
                            <Chip
                            style={{marginLeft :"2px"}}
                            key={key}
                            label={`${KeyTitleCase}: ${this.props.filters[key].length} Selected`}
                            onDelete={(e) => this.props.handleFilterChipRemove(key)}
                            className="filterChip"
                            />
                        );
                        } else if (this.props.filters[key].length > 0) {
                        return (
                            <Chip
                            style={{marginLeft :"2px"}}
                            key={key}
                            label={`${KeyTitleCase}: ${this.props.filters[key].join(",")}`}
                            onDelete={(e) => this.props.handleFilterChipRemove(key)}
                            className="filterChip"
                            />
                        );
                        }
                    })}

                    {Object.keys(this.props.searchFilters).map((key, index) => {
                        let KeyTitleCase = key[0].toUpperCase() + key.slice(1);

                        if (this.props.searchFilters[key].length > 4) {
                        return (
                            <Chip
                            style={{marginLeft :"2px"}}
                            key={key}
                            label={`${KeyTitleCase}: ${this.props.searchFilters[key].length} Selected`}
                            onDelete={(e) => this.props.handleSearchChipRemove(key)}
                            className="filterChip"
                            />
                        );
                        } else if (this.props.searchFilters[key].length > 0) {
                        return (
                            <Chip
                            style={{marginLeft :"2px"}}
                            key={key}
                            label={`${KeyTitleCase}: ${this.props.searchFilters[key].join(
                                ","
                            )}`}
                            onDelete={(e) => this.props.handleSearchChipRemove(key)}
                            className="filterChip"
                            />
                        );
                        }
                    })}
                            <Chip
                            style={{marginLeft:"2px"}}
                        // key={key}
                        label={"Month: " + monthNames[new Date().getMonth()]}
                        className="filterChip"
                    />
                    </ul> */}
                    </div>
                    <div>
                    {/* <Button
                        variant="contained"
                        style={{ backgroundColor: "rgb(43, 42, 40)", color: "rgb(255, 255, 255)" }}
                        disabled={props.Submitted}
                        onClick={() => props.handleSubmitClick()}
                        >
                            Submit
                    </Button> */}
                    </div>
                </div>
            </>
        )
}

export default withRouter(FilterBar)
