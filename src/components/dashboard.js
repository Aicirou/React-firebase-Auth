import React from 'react';
import { useState , useEffect } from "react";
import { useAuth, upload } from "../firebase/index"
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])


  const { user, logoutUser } = useUserContext();
  console.log(user);
  return (
    <>
    <div>
    <h1 >Dashboard </h1>
      <div className="fields">
      <img src={photoURL} alt="Avatar" className="avatar" />
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
      </div>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <button onClick={logoutUser}>Log out</button>
    </div>
    </>
  );
};

export default Dashboard;
