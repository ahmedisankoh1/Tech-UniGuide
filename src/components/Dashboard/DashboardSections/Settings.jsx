import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import "./Settings.css";

function Settings() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState("");

  useEffect(() => {
    const storedProfilePic = localStorage.getItem("profilePic");
    const currentUser = auth.currentUser;

    if (currentUser) {
      const fetchUserData = async () => {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setName(userData.fullName || "");
          setProfilePicUrl(storedProfilePic || "");
        }
      };
      fetchUserData();
    }
  }, []);

  const handleNameChange = (e) => setName(e.target.value);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
        setProfilePicUrl(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentUser = auth.currentUser;

    if (currentUser) {
      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        await updateDoc(userDocRef, {
          fullName: name,
        });

        localStorage.setItem("profilePic", profilePicUrl);
        
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Error updating profile: " + error.message);
      }
    }
  };

  return (
    <div className="settings-container">
      <h2>User Settings</h2>
      <p>Manage your account details:</p>
      <form className="settings-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Change name"
          />
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;
