import React from 'react';
import ListSymbol from './ListSymbol';

const Todoitems = props => {
	return (
			<ul>
				<li>
					<ListSymbol /> {props.description}, {props.deadlineDate}
				</li>
			</ul>
	);
};

export default Todoitems;
