import React from 'react';
import './App.css';
import { ListActions } from './components/ListActions';
import GetUserList from './components/GetUserList';
import RepoContainer from './Render-ComponentEx2/RepoContainer';
import UserRepoList from './Render-ComponentEx2/UserRepoList';
import RepoHeading from './Render-ComponentEx2/RepoHeading';



function App() {
  return (
    <div className="App">
      <ListActions>
        <GetUserList />
      </ListActions>
      {/* <RepoHeading />
      <RepoContainer
        
      render = {repoNames => (<UserRepoList repoNames={repoNames}/>)}
       /> */}
      
    </div>
  );
}

export default App;
