import React, { useRef } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './SignUp.css';

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    // we could have just used state, but i am trying this out
    await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((createdUser) => {
        console.log(createdUser);
      })
      .catch((error) => {
        alert(error?.message);
      });
  };

  // console.log(emailRef, passwordRef);

  const signIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error?.message));
  };

  return (
    <div className='signup-screen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button onClick={signIn} type='submit'>
          Sign In
        </button>

        <h4>
          <span className='signup-screen-gray'>New to Netflix? </span>
          <span className='signup-screen-link' onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
