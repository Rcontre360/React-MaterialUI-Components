import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Input = (props) => {
	const {
    label,
    type,
    margin,
    placeholder,
    variant,
    value,
    ...rest} = props;

  return (
    <TextField
        label={label || "Input"}
        type={type || "text"}
        margin={margin || "normal"}
        placeholder={placeholder || "Input"}
				variant={variant || "outlined"} 
        value={value || ""}  
        {...rest}     
    />
  )
}