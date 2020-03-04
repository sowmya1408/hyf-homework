import React, { useState,useEffect, createContext } from 'react';
import {GetUserNames} from './GetUserNames';
import { useDebounce } from 'use-debounce';


const UserListContext = createContext();

const ListActions = (props) => {
    const [userName, setUserName] = useState([]);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [debouncedInputText] = useDebounce(inputText, 200);

    useEffect(() => {
        if (debouncedInputText !== "") {
            setLoading(true)

            GetUserNames(debouncedInputText)
            .then(response => {
                const newData = response.items;
                setUserName(newData);
                setLoading(false);
                
            })
            .catch((err) =>{
                setError('Error')
            })
            
        }
      },[debouncedInputText])    


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
