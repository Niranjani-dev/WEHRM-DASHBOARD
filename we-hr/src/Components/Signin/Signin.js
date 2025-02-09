import React from 'react';
import Left from './Left';
import Right from './Right';
import './signin.css';

const Signin = () => {
  return (
    <div className='Signin-container'>
      <div className='Signin'> 
        <>
        <Left />
        <Right />
        </>
      </div>
    </div>
  );
};

export default Signin


