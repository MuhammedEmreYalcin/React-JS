//useContext() her seviyedeki Componentin Merkezdeki veriye kolayca erişmesini sağlar

import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()

function UseContext() {
    const [user, setUser] = useState("Jesse Hall");
  
    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    );
  }

  