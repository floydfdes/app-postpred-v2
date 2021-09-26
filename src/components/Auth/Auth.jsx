import React, { useState } from "react";
import { Login, SignUp } from "simple-authentication-react";
const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <SignUp setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default Auth;
