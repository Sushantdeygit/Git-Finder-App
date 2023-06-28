import React from 'react'

const Footer = () => {
    const year= new Date();
  return (
    <div>
        <footer className='footer'>
        <h3> © {year.getFullYear()} Git-Finder All rights reserved.</h3>
        </footer>
        
    </div>
  )
}

export default Footer
