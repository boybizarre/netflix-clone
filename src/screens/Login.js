import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  
  return (
    <div className='login-screen'>
      <div className='login-screen-background'>
        <img
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='logo'
          className='login-screen-logo'
        />
        <button className='login-screen-button'>Sign In</button>

        <div className='login-screen-gradient' />
      </div>

      <div className='login-screen-body'>
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time</h2>
          <h3>
            Ready to watch? Enter your email create or restart your membership
          </h3>

          <div className='login-screen-input'>
            <form>
              <input type='email' placeholder='Email Address' />
              <button className='login-screen-getStarted'>GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
