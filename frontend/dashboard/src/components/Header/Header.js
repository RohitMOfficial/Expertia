import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <div class="topnav">
        
        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className='white-circle'></span>  <span class="paytm" >Paytm-One97 Communications</span>
        </a>
        <a href="" className='split'>
            <span className='paytm'>Rohit Manathiya</span><span className='white-circle'></span>
        </a>
        <a href="" className='split'><span className='ver-line'></span></a>
        <span className='createb'></span>
        <a className='split createa'>
            <span className='createb'></span><span className='create'>+ Create</span ><span className='createaf'></span>
        </a>

        
        
        
    </div>
  )
}

export default Header