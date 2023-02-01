import React from 'react'
import './brandsIntegration.css';

const BrandsIntegration = () => {
  return <div className='brands-integration absolute-center'>
    <img 
     src={require("../../assets/brands.jpg")}
     className='bi-logos' 
     alt='bi-logos'
     />
  </div>

}

export default BrandsIntegration