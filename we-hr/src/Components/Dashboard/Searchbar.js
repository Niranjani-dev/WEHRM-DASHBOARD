import React from 'react'
import search from '../Assets/search.png'
import Hamburger from './Hamburger'





const Searchbar = () => {
  return (
    // <div className='Searchbar-Container'>

      
//     <div className='Searchbar'>
//   <div><Hamburger /></div>
//   <div style={{ position: "relative", flex: 1 }}>
//     <input type="text" placeholder="Search Employee" />
//     <img src={search} alt="Search" className="search-icon" />
//   </div>
// </div>

<div className="Searchbar">
  <div><Hamburger /></div>
  <div className="search-container">
    <input type="text" placeholder="Search Employee" />
    <img src={search} alt="Search" className="search-icon" />
  </div>
</div>


    // </div>
  )
}

export default Searchbar
