import React, { useContext } from 'react';
import {UserListContext} from './ListActions'
import SearchInput from './SearchInput'
import UserList from './UserList'
import SearchHeading from './SearchHeading'
import LoaderComponent from './LoaderComponent';


const GetUserList = () => {
    const data = useContext(UserListContext);
    console.log(data);
    const {loading, error} = data;
    console.log(error);
    return (
        <div>
            <SearchHeading />
            <SearchInput />
            <h3>{error}</h3>
            <>
            {
               loading ? <LoaderComponent /> :  
              <UserList />  
  
            }
            </>  
        </div>
    )
}

export default GetUserList
