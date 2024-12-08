import React, { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  
  const [users, setUsers] = useState([{Name:"Super-user",Email:"SuperUser@gmail.com",Role:"Admin"},{Name:"Guest", Email:"guest@gmail.com",Role:"User"},{Name:"Bob",Email:"bob@gmail.com",Role:"Moderator"}]);
  const [permissions,setPermissions] = useState({admin:["Read","Write","Update"],moderator:["Read","Write"],guser:["Read"]});
  
  return (
    <GlobalContext.Provider value={{ users, setUsers ,permissions,setPermissions}}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };
