import React, { useState } from 'react';
import todos from '../todos';
import WatchCount from './WatchCount';

const TodoItems = () => {
	const [items, setItems] = useState(todos);

	const addItem = () => {
		setItems([
			...items,
			{
				id: items[items.length - 1].id + 1 || 1,
				description: 'random text',
				completed: false,
			},
		]);
	};

	const handleCheckedStatus = id => {
		setItems(prevState => {
			const updatedTodos = prevState.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
			return updatedTodos;
		});
	};

	const handleDelete = id => {
		setItems(prevState => {
			const updatedTodoList = prevState.filter(todo => todo.id !== id);
			return updatedTodoList;
		});
	};

	let todoList;
	let noItem;

	if (items.length === 0) {
		noItem = 'No Items';
	} else {
		todoList = items.map(item => (
            <li 
            style={{ textDecorationLine: item.completed ? 'line-through' : '' }} 
            key={item.id}>
			{item.description}
            <input type="checkbox" 
            onChange={() => handleCheckedStatus(item.id)} 
            checked={item.completed} />
            <button 
            onClick={() => handleDelete(item.id)}>DELETE</button>
			</li>
		));
	}

	return (
		<div>
			<WatchCount />
			<button onClick={addItem}>Add todo</button>
			<p>{noItem}</p>
			<ul>{todoList}</ul>
		</div>
	);
}

export default TodoItems;
