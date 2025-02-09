import React from 'react'
import search from '../Assets/search.png'






const Searchbar = () => {
  return (
    // <div className='Searchbar-Container'>


      <div className='Searchbar'>
        
      <input type="text" placeholder="Search Employee" />
      <img src={search} alt="Search" className="search-icon" />
         
      </div>



    // </div>
  )
}

export default Searchbar
