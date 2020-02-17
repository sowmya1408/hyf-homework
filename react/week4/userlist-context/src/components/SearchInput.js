import React, {useContext} from 'react'
import {UserListContext} from './ListActions'

const SearchInput = () => {
     const userText = useContext(UserListContext);
      const {inputText, handleTextChange} = userText
    return <input type="text" placeholder="search user" value={inputText} onChange={handleTextChange} />
}

export default SearchInput
