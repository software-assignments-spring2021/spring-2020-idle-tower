import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './user-context.js'
import { BACKEND_URL } from './_constants';


const Logout = (props) => {
  const [userState, setUserState] = useContext(UserContext);
  let message = '';
  fetch(BACKEND_URL + '/user/logout')
    .then(d => {
      if (d['error']) {
       message = "Could not logout, please try again."
      } else {
        message = "Logged out successfully"
        const newUserState = userState;
        newUserState['logged-in'] = false;

        setUserState(newUserState);
      }
    });

  return (
    <div className="Logout">
      <h1>{message}</h1>
      <Redirect to="/"/>
    </div>
  );
};

export default Logout;


