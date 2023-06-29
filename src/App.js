import api from './data/api';
import { useState,useEffect } from 'react';
import Search from './search/Search';
import SearchList from './data/searchList';
import {AiOutlineGithub} from 'react-icons/ai'
import Loading from './Loading/Loading';
import Footer from './footer';
import {BsGithub,BsLinkedin} from 'react-icons/bs';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const[search,setSearch]= useState([]);
  const [username,setUsername]=useState('');
  const[error,setError]= useState(false);
  const[notfound,setnotFound]= useState(false);
  const[ isloading,setIsLoading]= useState(false);

   useEffect(()=>{
    AOS.init();
  },[ ])

  const handleClick=()=>{
    window.location.reload();
  }

  const fetchData= async()=>{
    setIsLoading(true)
    if (username.length>0) {
      try {
        // setError(false);
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
      setSearch([]);
      setError(false);
    }
    setIsLoading(false);
    }

  useEffect(()=>{
      fetchData()
    },[])
  
  if(isloading){
    return <Loading/>
  }
    
    return (
      <>
      <div className="App">
        <nav className='nav'>
          <p>GITHUB FINDER</p>
          <div className='nav-links'>
            <a href="https://github.com/Sushantdeygit/" target="_blank">
            <BsGithub size="25px" />
            </a>
            <a href="https://www.linkedin.com/in/sushant-dey-947782214/" target="_blank">
            <BsLinkedin size="25px"/>
            </a>
          </div>
         
        </nav>
        {notfound?(<div><p>Something went wrong,Click here to</p><button style={{cursor:"pointer"}}onClick={handleClick}>Refresh</button></div>):(
        <div className="app-wrapper"style={{ display: 'flex', flexDirection: 'column'}}>
          <h1 data-aos="fade-down" data-aos-duration="800" className='title'><AiOutlineGithub size="100px"/>GITHUB FINDER</h1>
          <Search setSearch={setSearch} username={username} setUsername={setUsername} fetchData={fetchData}/>
          <SearchList search={search} error={error} />
        </div>)}
        <Footer/>
      </div>
    </>
    );
  }

export default App;
