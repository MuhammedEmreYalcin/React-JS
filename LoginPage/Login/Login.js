import { useState  } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const authenticated = localStorage.getItem("authenticated") === "true";
  //const [isAuthenticated, setIsAuthenticated] = useState(authenticated);
  const users = [{ email: "test@email.com", password: "password" }];

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
      props.setLoggedIn(true);
    }else{
      alert("Please enter a valid E-Mail and Password"); 
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="form-group" onSubmit={handleSubmit}>
      <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            value={email}
            placeholder="Type your E-Mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Type your password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <label onClick={()=> props.onFormSwitch("forgotpw")} className="forgot-password">Forgot password?</label>
        <button type="submit">Login</button>
      </form>
      <p onClick={()=> props.onFormSwitch("register")}>Don't have an account? Sign Up</p>
    </div>
  );
};

export default Login;
