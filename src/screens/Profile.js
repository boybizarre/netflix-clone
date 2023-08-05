import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

import './Profile.css';

import Nav from '../components/Nav';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector(selectUser);
  const auth = getAuth();

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='profile-screen'>
      <Nav />
      <div className='profile-screen-body'>
        <h1>Edit Profile</h1>
        <div className='profile-screen-info'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
            alt='profile-avatar'
          />
          <div className='profile-screen-details'>
            <h2>{user.email}</h2>
            <div className='profile-screen-plans'>
              <button className='profile-screen-signout' onClick={logout}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
