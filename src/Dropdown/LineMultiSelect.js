import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from'@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 0
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
}))

const LineMultipleSelect = props => {
  const classes = useStyles()

  return (
    <div>
        <FormControl className={classes.formControl} style={{ backgroundColor: "transparent" }} >
        <InputLabel id="demo-mutiple-checkbox-label" style={{ color: props.textColor }} >
          {props.dropDownName}
        </InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={props.currentValue}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={{
            anchorOrigin: { vertical: "bottom", horizontal: "left" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            getContentAnchorEl: null
          }}
          style={{ borderBottom: `1px solid ${props.textColor}`, color: props.textColor }}
        >
          {props.filterOptions.map((option) => {
            return (
              <MenuItem
                key={option[props.valueName]}
                value={option[props.valueName]}
                onClick={(e) => props.selectfunction(e, option[props.valueName])}
                style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
              >
                <Checkbox checked={props.currentValue.includes(option[props.valueName])} />
                <ListItemText primary={option[props.valueName]} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default LineMultipleSelect