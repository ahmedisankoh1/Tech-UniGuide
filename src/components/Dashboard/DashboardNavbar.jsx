import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth, db } from "../firebaseConfig"; 
import { doc, getDoc } from "firebase/firestore";
import "./DashboardNavbar.css";

function DashboardNavbar() {
  const [userName, setUserName] = useState("User");
  const [profilePicUrl, setProfilePicUrl] = useState("");

  useEffect(() => {
    // Gets the current authenticated user
    const currentUser = auth.currentUser;

    if (currentUser) {
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserName(userData.fullName || "User");
          } else {
            console.log("No user data found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }

    const storedProfilePic = localStorage.getItem("profilePic");
    if (storedProfilePic) {
      setProfilePicUrl(storedProfilePic);
    }
  }, []);

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-logo">
        <p>
          <span>Welcome {userName} </span>
        </p>
      </div>
      <ul className="dashboard-navbar-links">
        <li>
          <NavLink to="/dashboard/Settings" activeClassName="active">
            <img className="profile_pic" src={profilePicUrl || "default-image-path"} alt="Profile" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNavbar;
