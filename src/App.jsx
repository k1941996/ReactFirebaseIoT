import React from "react";
import NavRoutes from "#routes/navRoutes";
import { AuthContextProvider } from "#context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <NavRoutes />
    </AuthContextProvider>
  );
};

export default App;
