import React from 'react'
import Post from './Post'
const SearchList = ({search,error}) => {
    const results= search.map(item=><Post key={item.id}search={search}/>)
    return(

        <div className='search-list'>
            <h2>{error?<p>User not found</p>:null}</h2>
            < div className='search-users'>
                {results}
            </div>
        </div>
    )
}


export default SearchList
