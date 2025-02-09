import React from 'react'
import Message from '../Assets/Message.png'
import bell from '../Assets/bell.png'
import lpimage from '../Assets/lpimage.png'
import lout from '../Assets/lout.svg'


function Navbar() {

  return (
    
 <div className='header-rightNav'>
<div className='inside-rightnav'>
<div className='bell'><img src={bell} alt='bell'/></div>
<div className='Message'><img src={Message}  alt='Message'/></div>
<div className='lpimage'><img src={lpimage} alt='lpimage'/></div>
<div className='Admmiraname'>Admirra John</div>
<div className='logout'><img src={lout} alt='lout'/></div>
</div>
      </div>
    
  )
}

export default Navbar
