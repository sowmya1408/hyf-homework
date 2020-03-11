import React, {useState, useEffect} from 'react';
import {GetRepoDetails} from './GetRepoDetails'

const  RepoContainer = (props) => {
    const [repoNames, setRepoNames] = useState([]);

    useEffect(() => {
        GetRepoDetails()
        .then(data => setRepoNames(data))
    }, [])

    return (
        <div>
           {props.render(repoNames)} 
        </div>
    )
}

export default RepoContainer
