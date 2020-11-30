import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([{}]);
  useEffect(() => {

    async function fetchData() {
      ///with Async await
      const response = await fetch('https://api.github.com/users/ishmamAli786/repos');
      const data = await response.json();
      console.log(data)
      setRepos(data)
    }
    fetchData();



    ////with Promise
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //     setData(json)
    // })



  }, [])
  return (
    <div className="App">
      <h1>Your Are Seeing All Repositories</h1>
      <ul>
        {repos.map((repo, index) => {
          return <li key={index}>{repo.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
