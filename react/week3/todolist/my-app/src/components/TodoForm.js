import React, {useState} from 'react'

function TodoForm({addTodo}) {

    const [descriptionValue, setDescriptionValue] = useState('');
	const [deadline, setDeadline] = useState('');


    const handleSubmit = (event) => {
		event.preventDefault();
		addTodo(descriptionValue, deadline);
		setDescriptionValue("");
		setDeadline("")
	 }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="descriptionInput">Todo description</label>
            <input 
            type="text" 
            name="description" 
            value = {descriptionValue} 
            onChange={e => setDescriptionValue(e.target.value)}
            id="descriptionInput" required/>
			<label htmlFor="dateInput">Todo deadline</label>
            <input 
            type="date" 
            name="date" 
            value = {deadline} 
            onChange={e => setDeadline(e.target.value)} 
            id="dateInput" required/>
           <button type="submit" >Add todo</button>
        </form>
    )
}

export default TodoForm
