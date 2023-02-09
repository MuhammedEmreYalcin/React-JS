import { useState } from "react";
import "./login.css";

const Forgotpw = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <h2>Do you have any problems to Login</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="email">Please enter your E-Mail</label>
        <input
          type="email"
          value={email}
          placeholder="Type your E-Mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button type="submit">Reset Your password</button>
      </form>
      <p onClick={() => props.onFormSwitch("register")}>Don't have an account? Sign Up</p>
      <div>-----------------------------------------------------------------</div>
      <p onClick={()=> props.onFormSwitch("Login")}>Already have an account? Login here</p>
    </div>
  );
};

export default Forgotpw