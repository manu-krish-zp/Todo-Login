import { useEffect, useState } from "react";

const Input = (props) => {
	const [enteredTask,setEnteredTask]=useState("")
	const [isValid,setIsValid]=useState(false)

	const handleChange = (event)=>{
		// console.log(event.target.value)
		setEnteredTask(event.target.value)
	}

	const handleSubmit = (event) =>{
		event.preventDefault()
		if(isValid)
		{
			props.addTask(enteredTask)
			setEnteredTask("")
		}
		else
		{
			alert("Please type at least 3 characters..")
		}
		
	}

	useEffect(()=>{
		if(enteredTask.length<3)
		{
			// console.log("Bad input")
			setIsValid(false)
		}
		else
		{
			// console.log("Good input")
			setIsValid(true)
		}
	},[enteredTask])

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="Enter Task" className="task-input" value={enteredTask} onChange={handleChange}/>
			<button type="submit" disabled={!isValid}>Add task</button>
		</form>
	)

}

export default Input;