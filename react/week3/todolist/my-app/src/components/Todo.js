import React from 'react';
import FancyBorder from './FancyBorder'

function Todo({completed, description, deadline, editMode, toggleItem, deleteItem, updateItem, editItem }) {
	console.log("render");
	const editView = () => {
        return <input 
        type="text" 
        value={description} 
        onChange={updateItem} 
        />;
	};

	const listView = () => {
		return (
			<span>
				{description} | {deadline}
			</span>
		);
	};
	return (
        <FancyBorder color="black">
		<li className="list"style={{ textDecorationLine: completed ? 'line-through' : '' }}>
			{editMode ? editView() : listView()}
            <input 
            type="checkbox" 
            onChange={toggleItem} 
            checked={completed} />
			<button onClick={deleteItem}>DELETE</button>
			<button onClick={editItem}>{editMode ? 'Update' : 'Edit'}</button>
		</li>
        </FancyBorder>
	);
}

function areEqual(prevProps, nextProps) {

   return prevProps.description === nextProps.description && prevProps.completed === nextProps.completed
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
  }
  export default React.memo(Todo, areEqual);

