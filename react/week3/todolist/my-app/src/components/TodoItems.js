import React, { useState, useEffect } from 'react';
import WatchCount from './WatchCount';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuid from 'uuid';
import LoaderComponent from './LoaderComponent';
//import DatePicker from 'react-date-picker';

const TodoItems = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		(async () => {
			const todosList = await fetch(
				'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
			).then(response => response.json());
			setItems(todosList);
		})();
	}, []);
	const addItem = (text, date) => {
		setItems([
			...items,
			{
				id: uuid(),
				description: text,
				deadline: date,
				completed: false,
				isEditMode: false,
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
	const handleEdit = id => {
		setItems(prevState => {
			const updatedTodos = prevState.map(todo => {
				if (todo.id === id) {
					return { ...todo, isEditMode: !todo.isEditMode };
				}
				return todo;
			});
			return updatedTodos;
		});
	};

	const handleUpdate = (id, value) => {
		setItems(prevState => {
			const updatedTodos = prevState.map(todo => {
				if (todo.id === id) {
					return { ...todo, description: value };
				}
				return todo;
			});
			return updatedTodos;
		});
	};

	return (
		<div>
			<WatchCount />
			<TodoForm addTodo={addItem} />
			{items !== null ? <ul>{items.length === 0 ? 'No Items' :
		    items.map(item => (
				<Todo
					key={item.id}
					description={item.description}
					deadline={item.deadline}
					completed={item.completed}
					editMode={item.isEditMode}
					updateItem={e => handleUpdate(item.id, e.target.value)}
					editItem={() => handleEdit(item.id)}
					toggleItem={() => handleCheckedStatus(item.id)}
					deleteItem={() => handleDelete(item.id)}
				/>
			))}</ul> 
			: 
			<LoaderComponent /> 
	}
				</div>
	);
};

export default TodoItems;
