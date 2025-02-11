import React from 'react'
import burgermenu from '../Assets/burgermenu.png'
import searchicon from '../Assets/searchicon.png'

function Hamburger() {
  return (
    <div className='Hamburger-Menu'>

      <div><img src={burgermenu}/></div>


      <div><img src={searchicon}/></div>

    </div>
  )
}

export default Hamburger
