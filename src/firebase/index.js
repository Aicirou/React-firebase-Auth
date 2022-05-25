import { useEffect, useState } from "react";
import { getAuth,  onAuthStateChanged, updateProfile } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDNZY96SUuk3kie-NJ3gKGyMzPuS6lCe3s",
  authDomain: "auth-development-5662c.firebaseapp.com",
  projectId: "auth-development-5662c",
  storageBucket: "auth-development-5662c.appspot.com",
  messagingSenderId: "565351645150",
  appId: "1:565351645150:web:aaebbd881fdadb3319a74f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

// storage 
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL}, { snapshot});
  
  setLoading(false);
  alert("Uploaded file!");
}
