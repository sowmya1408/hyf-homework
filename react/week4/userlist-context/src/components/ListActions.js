import React, { useState,useEffect, createContext } from 'react';
import {GetUserNames} from './GetUserNames'

const UserListContext = createContext();

const ListActions = (props) => {
    const [userName, setUserName] = useState([]);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

console.log(userName);
    useEffect(() => {
        setLoading(true)
        GetUserNames(inputText)
          .then(response => {
              const newData = response.items;
              setUserName(newData);
              setLoading(false);
              
          })
          .catch((err) =>{
            setError('Error')
          })
          
      },[inputText])    


    const handleTextChange = (e) => {
        setInputText(e.target.value)
    }
      
      return (
        <UserListContext.Provider value={{
            userName,
            inputText,
            loading,
            handleTextChange,
            error

        }}>
         {props.children}
        </UserListContext.Provider>
    )
}

export { ListActions, UserListContext } 
