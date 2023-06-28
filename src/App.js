import api from './data/api';
import { useState,useEffect } from 'react';
import Search from './search/Search';
import SearchList from './data/searchList';
import {AiOutlineGithub} from 'react-icons/ai'
function App() {
  const[search,setSearch]= useState([]);
  const [username,setUsername]=useState('');
  const[error,setError]= useState(false);
  const[notfound,setnotFound]= useState(false);


  const handleClick=()=>{
    window.location.reload();
  }

  const fetchData= async()=>{

    if (username.length>0) {
      try {
        setError(false);
        const response = await api.get(`/search/users?q=${username}`);
        setSearch(response.data.items);
        response.data.items.length===0?setError(true):setError(false)
        console.log(username)
        console.log(response)
      } catch ( err) {
       err.response.status===403?setnotFound(true):setnotFound(false)
       setSearch([])
      }
    } else {
      setSearch([ ]);
      setError(false);
    }
    }

  useEffect(()=>{
      fetchData()
    },[username])

    
    return (
      <>
      <div className="App">
        {notfound?(<div><p>Something went wrong,Click here to</p><button style={{cursor:"pointer"}}onClick={handleClick}>Refresh</button></div>):(
        <div className="app-wrapper"style={{ display: 'flex', flexDirection: 'column'}}>
          <h1 className='title'><AiOutlineGithub size="100px"/>GITHUB FINDER</h1>
          <Search setSearch={setSearch}username={username} setUsername={setUsername}/>
          <SearchList search={search} error={error} />
        </div>)}
      </div>
    </>
    );
  }

export default App;
