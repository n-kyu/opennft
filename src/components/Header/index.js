import React from 'react'
import Button from '../../common/styles/Button';
import './header.css';

const Header = () => {
  return (
  <>  
  <div className='header'> 
    <span className='header-title heading-gradient cur-po'>Open NFTs</span>
    <div className='heading-btn'>
    <Button btnText='connect your wallet' btnType='Secondary' customClass='seemore-btn'/>
    </div>
  </div>
  </>
  )

}

export default Header