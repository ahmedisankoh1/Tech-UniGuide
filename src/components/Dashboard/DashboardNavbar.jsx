import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { auth, db } from "../firebaseConfig"; // Import your Firebase config
import { doc, getDoc } from "firebase/firestore";
import profile_pic from "../../assets/images/img1.jpg";
import "./DashboardNavbar.css";

function DashboardNavbar() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    // Get the current authenticated user
    const currentUser = auth.currentUser;

    if (currentUser) {
      // Fetch user data from Firestore
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
            <a href="/dashboard/settings"><img className="profile_pic" src={profile_pic} alt="" /></a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNavbar;