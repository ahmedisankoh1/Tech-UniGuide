import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig"; // Import your Firebase configuration
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      // Log in with Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful! Redirecting to your dashboard...");
      navigate("/dashboard/home"); // Redirect to the dashboard or home page after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in, Either your password or email is incorrect");
    }
  };

  return (
    <div className="login-container">
      <div className="login-contents">
        <h2>Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;