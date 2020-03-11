import React from 'react';
import SearchInput from './SearchInput'
import UserList from './UserList'
import SearchHeading from './SearchHeading'


const GetUserList = () => {
    return (
        <div>
            <SearchHeading />
            <SearchInput />
            <UserList />
        </div>
    )
}

export default GetUserList
