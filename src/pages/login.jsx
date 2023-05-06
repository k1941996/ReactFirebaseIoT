import React, { useContext, useEffect } from "react";
import { UserAuth } from "#context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signInWithGoogle, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
    </div>
  );
};

export default Login;
