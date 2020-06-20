import React, { useState } from 'react';
import './style.css';

// components
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

function LoginRegister() {
  const [style, setstyle] = useState(false);

  return (
    <div className='box'>
      <Login click={()=>{setstyle(true)}} class={!style ? "l-opacity2" : "l-opacity"}  />
      <Register click={()=>{setstyle(false)}} class={style ? "loginbox" : "loginbox2"} />
    </div>
  );
}

export default LoginRegister;
