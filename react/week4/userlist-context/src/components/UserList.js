import React, { useContext } from 'react';
import LoaderComponent from './LoaderComponent';
import {UserListContext} from './ListActions';

const UserList = () => {
	const name = useContext(UserListContext);
	const { userName, loading, error } = name;
	return (
		<>
		   <h3>{error}</h3>
           {loading ? <LoaderComponent /> : 
		   <ul>
            {userName === undefined ? 
            'No results' 
            : userName.map(item => 
			<li key={item.id}>{item.login}</li>
			)}
            </ul>
            }		
		</>
	);
};

export default UserList;
