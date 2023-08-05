import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
// components
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Profile from './screens/Profile';

import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        // logged in
        dispatch(
          login({
            uid: authenticatedUser.uid,
            email: authenticatedUser.email,
          })
        );
        console.log(authenticatedUser);
      } else {
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
