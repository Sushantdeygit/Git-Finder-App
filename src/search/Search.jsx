import {BsSearch} from 'react-icons/bs'

export default function Search({setUsername,username,setSearch,fetchData}){
   
    const handleSearch= (e) =>{
        try{
            setUsername(e.target.value)
        }catch(error){
            console.log(error)
        }           
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetchData();
    }
    const handleClear = () => {
        setUsername('');
        setSearch([]);
      };

    return(
        <div>
        <form className='form'onSubmit={handleSubmit}>
            <input
            type="text"
            value={username}
            placeholder='Search'
            onChange={handleSearch}
            autoFocus>
            </input>
            {username&&(
                <button className="icon"type="submit"><BsSearch size={26}/></button>
            )}
            {username && (
          <button className='clear-Btn' type="button" onClick={handleClear}>Clear</button>
        )}

        </form>
    </div>
    )
   
}