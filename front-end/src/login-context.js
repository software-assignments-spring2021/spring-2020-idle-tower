import React, { useState } from "react";

const LoginContext = React.createContext([false, () => {}]);

const LoginProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      {props.children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };