import "./App.css";
import {useState} from 'react';
import IssueList from './components/IssueList/IssueList';

function App() {

  const [userInput, setUserInput] = useState("");
  const [repoName, setRepoName]= useState("");
  const [message, setMessage]= useState("");
  const [list, setList]= useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage]= useState(8);
  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const currentPagePost = list.slice(indexOfFirstPost,indexOfLastPost);

  let mystatus;
  const fetchIssueList = ()=>{
    console.log(userInput, repoName);
    fetch(`https://api.github.com/repos/${userInput}/${repoName}/issues`)
    .then((response)=>{
       mystatus = response.status;
      return response.json()
    })
    .then((result)=>{
      if(mystatus===200)
      {
        setMessage("");
        setList(result);
        console.log(list, result);
      }
      else
      {
        setMessage("Oopps!!! Error in the repository or user name");
      }

    }).catch(console.log("error"))
  };

  

  const handleUser =(event)=>{
    setUserInput(event.target.value);
  }

  const handleRepo = (event)=>{
    setRepoName(event.target.value);
  }

  return (
    <div className="App">
      <div className="box--container">
        <img
          className="github--logo"
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt="github-icon"
        />
        <div className="search--input">
          <input id="input--githubuser" className="input--githubuser" placeholder="Github User" type="text" onChange={handleUser} />
          <input id="input--reponame" className="input--githubuser" placeholder="Repo-name" type="text" onChange={handleRepo}/>

        </div>
       <button type="submit" className="github--button" onClick={fetchIssueList}>Search</button>
      </div>
      <span className="github--message">{message}</span>
     
       
      {list.length>0 && <IssueList list={list}/> }  
       
         
       
     
    </div>
  );
}

export default App;
