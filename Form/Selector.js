import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export const Selector = (props) => {
	const {
		label,
		elements,
		value,
		onChange,
		helperText,
		name,
		...rest} = props;

  	return (
  	<TextField
	    select
	    name={name}
	    label={label}
	    value={value}
	    onChange={onChange}
	    helperText={helperText || "Please select an option"}
	    margin="normal"
	    variant="outlined"
	    {...rest}
	>
	  	<MenuItem value="">None</MenuItem>
	    {elements.map((option,key) => (
	      <MenuItem key={key} value={option.value}>
	        {option.title}
	      </MenuItem>
	    ))}
	 </TextField>
  	)
}
