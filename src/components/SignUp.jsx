import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    // Validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (fullName && email && password) {
      try {
        // Creating a new user with email and password using Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Sends an email verification
        await sendEmailVerification(user);

        // Storing user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          fullName: fullName,
          email: email,
        });

        alert("Signup successful! Please check your email to verify your account.");
        navigate("/login");

      } catch (error) {
        console.error("Error during signup:", error);
        alert("Error during signup: " + error.message);
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-contents">
        <h2>Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="First Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="fullName"
            placeholder="Last Name"
            // value={formData.fullName}
            // onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
