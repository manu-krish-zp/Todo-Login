import { useEffect, useState } from 'react';
import Card from './card';
import Input from './input';


const initialTasks = [
	{
		id: 0,
		text: "This is my first task"
	},
	{
		id: 1,
		text: "This is my second task"
	},
	{
		id: 2,
		text: "This is my third task"
	},
]


const Tasks = () => {
	const [tasks, setTasks] = useState(initialTasks)

	useEffect(()=>{
		//initialTasks= GET TASK API call
		//setTasks(initialTasks)
	})

	const handleComplete = (taskId) => {
		setTasks(previousTasks => previousTasks.filter((task) => task.id !== taskId))
		//Delete Task API Call
	}

	const addTask = (taskText) => {
		setTasks(previousTasks => [...previousTasks,
		{ id: Math.random(), text: taskText }
		])
		//Add task API call

	}

	return (
		<>
			<Input addTask={addTask} />

			<div className="tasks">
				{
					tasks.map((task) => {
						return <Card id={task.id}
							key={task.id}
							text={task.text}
							handleComplete={handleComplete} />
					})
				}
			</div>
		</>
	)
}

export default Tasks;