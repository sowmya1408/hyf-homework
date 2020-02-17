import React, { useContext } from 'react';
import {UserListContext} from './ListActions'

const UserList = () => {
	const name = useContext(UserListContext);
	const { userName } = name;
	return (
		<ul>
            {userName === undefined ? 
            'No results' 
            : userName.map(item => <li key={item.id}>{item.login}</li>)}
            </ul>
	);
};

export default UserList;
