import "../../assets/css/form.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    // Check if user exists and credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      
      navigate('/');
      // Redirect or perform any action after successful login
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="d-flex justify-content-start align-items-center mt-5 mb-5">
      <div style={{ marginLeft: "100px" }} className="">
        <h1 className="mb-5">Create an account</h1>
        <h5 className="mb-5">Enter your details below</h5>
        <form onSubmit={handleLogin} className="d-flex flex-column gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
          type="submit"
            className="border-0 p-3 rounded"
            style={{
              width: "300px",
              backgroundColor: "rgb(184, 43, 43)",
              color: "white",
            }}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
