import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from './Functional-components/TodoListHeader';
import TodoItems from './Functional-components/TodoItems';
import Header from './Class-components/Header';
import Items from './Class-components/Items';



const todos = [
	{
		id: 1,
		description: 'Get out of bed',
		deadlineDate: 'Tue Jan 28 2020',
	},
	{
		id: 2,
		description: 'Brush Teeth',
		deadlineDate: 'Wed Jan 29 2020',
	},
	{
		id: 3,
		description: 'Eat breakfast',
		deadlineDate: 'Thursday Jan 30 2020',
	},
];

// Function App() render - Hooks

const App = ()  => {
	const maptodos = todos.map(todo => <TodoItems key={todo.id} description={todo.description} deadlineDate={todo.deadlineDate} />)
	return (
		<div>
			<TodoListHeader />
			{maptodos}
		</div>
	);
}

// Class App() render - traditional

// class App extends Component {
//    render() {
//      const todosList = todos.map(todo => <Items key={todo.id} description={todo.description} deadlineDate={todo.deadlineDate} />)
//      return (
//        <div>
//          <Header />
//          {todosList}
//        </div>
//      )
//    }
// }

export default App;

