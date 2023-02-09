import { useState  } from "react";
import "./login.css";

const Register = (props) =>{
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
      };

    return(
        <div className="login-container">
        <h2>Register</h2>
        <form className="form-group" onSubmit={handleSubmit}>
          <label>Full Name</label>  
          <input
            type="text"
            value={name}
            placeholder="Type your Full Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>E-Mail</label>
          <input
            type="email"
            value={email}
            placeholder="Type your E-Mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Type your password"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <button type="submit">Login</button>
        </form>
        <p onClick={()=> props.onFormSwitch("Login")}>Already have an account? Login here</p>
      </div>
    )
}

export default Register;