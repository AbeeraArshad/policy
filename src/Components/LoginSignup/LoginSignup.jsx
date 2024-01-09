import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAction = () => {
    if (action === "Login") {
      console.log("Logging in with:", formData);
    } else if (action === "Sign Up") {
      console.log("Signing up with:", formData);
    } else {
      console.log("Forgot Password for:", formData.email);

      setFormData({ name: "", email: "", password: "" });
    }

    setFormData({ name: "", email: "", password: "" });
  };

  const dynamicFields =
    action === "Login" || action === "Forgot Password" ? null : (
      <div className="input">
        <img src={user_icon} alt="" />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
    );

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {dynamicFields}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
      </div>
      {/* {(action === 'Sign Up' || action === 'Login') && (
        <div className='forgot-password' onClick={() => setAction('Forgot Password')}>
          Forgot Password?<span>Click Here..</span>
        </div>
      )} */}

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div
          className="forgot-password"
          onClick={() => setAction("Forgot Password")}
        >
          Forgot Password?<span>Click Here..</span>
        </div>
      )}
      <div className="submit-container">
        <div className="submit" onClick={handleAction}>
          {action === "Forgot Password" ? "Reset Password" : action}
        </div>
      </div>

      {/* <div className='submit-container'>
        <div className='submit' onClick={handleAction}>
          {action === 'Login' ? 'Login' : 'Sign Up'}
        </div>
      </div> */}
      <div className="switch-action">
        <span
          onClick={() => setAction(action === "Login" ? "Sign Up" : "Login")}
        >
          {action === "Login" ? "Sign Up" : "Login"}
        </span>
      </div>
    </div>
  );
};

export default LoginSignup;
