import { useState } from 'react';
import Forgotpw from './Login/Forgotpw';
import Login from './Login/Login';
import Register from "./Login/Register";



function App() {
  const [currentForm, setCurrentForm] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(false);
  const users = [{ email: "test@email.com", password: "password" }];

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      {currentForm === "Login" && <Login onFormSwitch={toggleForm} />}
      {currentForm === "register" && <Register onFormSwitch={toggleForm} />}
      {currentForm === "forgotpw" && <Forgotpw onFormSwitch={toggleForm} />}
    </div>
  );
}

export default App;
