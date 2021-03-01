import React,{useState} from 'react';

export const useForm = (initialValues={},errorFunction=()=>false)=>{
	const [formValues,setFormValues] = useState(initialValues);
	const [errorValues,setErrorValues] = useState({});

	const handleValuesChange = e=>{
		const {name,value} = e.target;

		setErrorValues({[name]:errorFunction(name,value)})
		setFormValues(val=>({
			...val,
			[name]:value
		}))
	}

	return [
		formValues,
		handleValuesChange,
		errorValues,
		setErrorValues,
		setFormValues
	]
}

export const Form = (props) => {
	const {onSubmit,...rest} = props; 
	const generalSubmit = e=>{
		e.preventDefault()
		onSubmit()
	}

	return (
	  <form 
	  	{...props} 
	  	autoComplete="off" 
	  	onSubmit={generalSubmit}
	  >
	  	{props.children}
	  </form>
	)
}
