import React from 'react'
// import { useContext } from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
// import { UserContext } from '../context/AuthContext';
function Login_2() {

  // const {user, setUser} = useContext(UserContext)

  let navigate = useNavigate();
  const {state} = useLocation();
  const { email } = state; 
  let path = `/signin`;

  return (
    <div style={{ height: '1024px', width: '1447px' }}>
      <div style={{ display: 'flex' }}>
        <h1 style={{ marginLeft: '31px', width: '172px', height: '75px', fontFamily: 'Work Sans', fontSize: '64px', fontWeight: '700', lineHeight: '75px', letterSpacing: '-0.02em', color: '#0E0E2C', marginTop: '24px', marginBottom: 0 }}>
          Gyani
        </h1>
        <button onClick={() => navigate("/login/email")} style={{cursor:'pointer', marginLeft: '1058px', width: '113px', height: '48px', marginTop: '37px', border: '1px solid #EFEFFD', background: '#FFFFFF', borderRadius: '8px', color: '#428CFB', padding: '12px 24px' }}>
          SIGN IN
        </button>
      </div>
      <div style={{
        alignItems: 'center',
        justifyContent: 'center', textAlign: 'center',
        marginTop: '184px', height: '71px', width: '600px', marginLeft: '436px'
      }}>
        <h2 style={{ margin: 0, fontFamily: 'Work Sans', fontSize: '40px', fontWeight: '700', lineHeight: '47px', letterSpacing: '-0.02em', fontStyle: 'normal' }}>
          Finish setting up your account.
        </h2>
        <h2 style={{ margin: 0, fontFamily: 'Work Sans', fontSize: '24px', fontWeight: '500', lineHeight: '28px', color: '#0E0E2C' }}>
          Gyani is personalised for you.
        </h2>
      </div>
      <h3 style={{
        height: '32px', marginTop: '46px', width: '900px',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        marginLeft: '304px', fontFamily: 'Work Sans', fontSize: '24px', fontWeight: '600', lineHeight: '28px', color: '#000000'
      }}>
        Create a password to read anytime using on any device.
      </h3>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '17px' }}>

        <button style={{cursor:'pointer', height: '48px', width: '170px', borderRadius: '8px', backgroundColor: '#428CFB', color: '#FFFFFF', border: 'none' }} onClick={() => navigate(path,{state:{email:email}})}>
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Login_2