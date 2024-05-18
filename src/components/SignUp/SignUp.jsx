import { useState } from "react";
import "../../assets/css/form.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created successfully!");
  }
  
 
  return (
    <div className="d-flex justify-content-start align-items-center mt-5 mb-5">
      {/* <div className="">
        <img src={sideImage} />
      </div> */}
      <div style={{ marginLeft: "100px" }} className="">
        <h1 className="mb-5">Create an account</h1>
        <h5 className="mb-5">Enter your details below</h5>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
          <button
          type="submit"
          className="border-0 p-3 rounded"
            style={{
              width: "300px",
              backgroundColor: "rgb(184, 43, 43)",
              color: "white",
            }}
          >
            Create Account
          </button>
          <button
          className="border p-3 rounded"
            style={{
              width: "300px",
              backgroundColor: "white",
              color: "black",
            }}
          >
           <FcGoogle /> Sign up with Google
          </button>
          
        </form>
        <div className="d-flex gap-2 mt-3">
          <p>Already have a account?</p>
          <Link to="/login"><p>Log in</p></Link>
          </div>
      </div>
    </div>
  );
};

export default SignUp;