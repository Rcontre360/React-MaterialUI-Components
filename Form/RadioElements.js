import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export const RadioElements = (props) => {

	const {
		label,
		column,
		row = column?false:true,
		elements,
		margin,
		...rest
	} = props;

  return (
  	<FormControl >
  		<FormLabel>{label || "label"}</FormLabel>
  		<RadioGroup 
  			column={column} 
  			row={row}
  			{...rest}
  		>
			{
				elements.map((el,key)=>(
					<FormControlLabel 
						key={key}
						control={<Radio/>}
						value={el.value || "value"}
						label={el.label || "label"}
					/>
				))	
			}
  		</RadioGroup>
  	</FormControl>
  )
}