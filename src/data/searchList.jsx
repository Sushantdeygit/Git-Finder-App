import React from 'react'
import Post from './Post'
const SearchList = ({search,error}) => {
    const results=<Post search={search}/> 
    return(
        <div className='search-list'>
            <h2>{error?<p style={{color:"red"}}>User not found</p>:null}</h2>
            < div className='search-users'>
                <div>{results}</div>
            </div>
        </div>
    )
}


export default SearchList
