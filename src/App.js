import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';
import Login from './screens/Login';

import './App.css';

function App() {
  // const user = {
  //   name: 'Jamal',
  // };
  const user = null

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
