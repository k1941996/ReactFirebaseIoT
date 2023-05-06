import { UserAuth } from "#context/AuthContext";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logOut } = UserAuth();

  const signOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>My Iot Application</h1>
      {user ? (
        <div>
          <button onClick={signOut}>signOut</button>
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Header;
