import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    width: "100%",
  },
}));

const SingleSelect = props => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel style={{ color: props.textColor, backgroundColor: props.backgroundLabelColor }} >
            {props.dropDownName}
          </InputLabel> 
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label={props.dropDownName}
            value={props.currentValue}
            // onChange={(e) => props.selectfunction(e)}
            style={{ color: props.textColor, backgroundColor: props.backgroundColor,
                     order: `${props.bordersize} solid ${props.textColor}` 
                    }}
            MenuProps={{ 
                anchorOrigin: {vertical: "bottom", horizontal: "left"},
                transformOrigin: {vertical: "top", horizontal: "left"},
                getContentAnchorEl: null
            }}
          >
            {/* {props.filterOptions.map((option) => (
              <MenuItem
                key={option[props.idName]}
                value={option[props.idName]}
                style={{ color: props.textColor, backgroundColor: props.backgroundColor }}
              >
                {option[props.valueName]}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
      </div>
    </form>
  );
}

export default SingleSelect