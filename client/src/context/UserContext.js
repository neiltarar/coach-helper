import React, { useContext } from "react";
import { socket } from "./SocketModule.js";
const UserContext = React.createContext();
const UpdateUserContext = React.createContext();

// custom hooks
export function GetUserContext() {
  return useContext(UserContext);
}

export function SetUserContext() {
  return useContext(UpdateUserContext);
}

export function UserProvider({ children }) {
  const [userContext, setUserContext] = React.useState({
    loginStatus: false,
  });
  const updateUserContextFunction = (c) => {
    setUserContext(c);
  };

  return (
    <UserContext.Provider value={{ userContext }}>
      <UpdateUserContext.Provider value={updateUserContextFunction}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
}
