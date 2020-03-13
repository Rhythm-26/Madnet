import * as React from "react";

/** Utils */
import { DEFAULT_USER_AUTH } from "../Constants";

const useAuthHandler = (initialState) => {
  const [auth, setAuth] = React.useState(initialState);

  const setUser = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
    setAuth(user);
  };

  const unsetUser = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };

  return {
    auth,
    setUser,
    unsetUser
  };
};

export default useAuthHandler;
