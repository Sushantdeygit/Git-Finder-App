import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Post = ({search}) => {
  useEffect(()=>{
    AOS.init();
  },[search])

  return (
    <div>
       {
      search.map((item)=>{
        return(
          <div className='main'>
            <div data-aos="fade-down" data-aos-duration="800"data-aos-delay="300"className='container'>
              <div className='container-profile'>
              <img src={item.avatar_url} alt={item.name}></img>
                <div className='container-head'>
                  <h1>{item.login}</h1>
                  <p>{item.type}</p>
                </div>
              </div>
              <a className='link'href={item.html_url} target='_blank'>Visit Profile</a>
            </div>
          </div>
        )
      })

      
    }
    </div>
   
  )
}

export default Post
