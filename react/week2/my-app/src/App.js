import React from 'react';
import TodoItems from './components/TodoItems';
import TodoHeading from './components/TodoHeading';
import WatchCount from './components/WatchCount';

function App() {
	return (
		<div>
			<TodoHeading />
			<WatchCount />
			<TodoItems />
		</div>
	);
}

export default App;
