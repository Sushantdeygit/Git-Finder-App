import {BsSearch} from 'react-icons/bs'

export default function Search({setUsername,username,setSearch}){
   
    const handleSearch= (e) =>{
        try{
            setUsername(e.target.value)
        }catch(error){
            console.log(error)
        }           
    }
    const handleClear = () => {
        setUsername('');
      };

    return(
        <div>
        <form className='form'>
            <input
            type="text"
            value={username}
            placeholder='Search'
            onChange={handleSearch}
            autoFocus>
            </input>
            {username && (
          <button className='clear-Btn' type="button" onClick={handleClear}>Clear</button>
        )}

        </form>
    </div>
    )
   
}