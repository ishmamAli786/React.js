import React,{useEffect,useState} from 'react';
function App(){
  const [repos,setRepos]=useState([{}]);
  useEffect(()=>{
    async function getRepos(){
     const response =await fetch("https://api.github.com/users/ishmamAli786/repos");
    const data=await response.json();
   //  console.log(data)
    setRepos(data);
   }
   getRepos();
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then((response) => response.json())
  // .then(json => {
  //   setData(json);
  // })
  },[])

return(
  <div className="App">
    <h1>You are seeing all repositories</h1>
    <ul>
      {repos.map((repoObj,ind)=>{
        return(<li key={ind}>{repoObj.name}</li>)
      })}
    </ul>
  </div>
)
}

export default App;

