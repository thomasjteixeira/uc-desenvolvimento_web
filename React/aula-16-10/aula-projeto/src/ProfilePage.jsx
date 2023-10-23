import React from 'react';
import NavBar from './NavBar';

function ProfilePage() {
  return (
    <div>
      <NavBar />
      <h1>My Profile</h1>
      <p> Dev FullStack</p>
      <img src = "https:/>/www.example.com/profile.jpg" alt = "profile" />
    </div>
  );
}

export default ProfilePage;