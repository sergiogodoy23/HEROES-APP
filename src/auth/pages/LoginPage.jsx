import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Sergio Godoy' );
    
    navigate( lastPath, {
      replace: true
    });
  }

  return (
    
      <div className="body">
        <div className='login-style'>
          <h1>HEROES APP</h1>

          <button 
            className="btn btn-primary"
            onClick={ onLogin }
          >
            Login
          </button>

        </div>

      </div>
  )
}
