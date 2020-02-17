import React from 'react'

const UserRepoList = (props) => {
    const {repoNames} = props
    return (
    repoNames.map(repo => <li key={repo.id}>{repo.name}</li>)
    )
}

export default UserRepoList
