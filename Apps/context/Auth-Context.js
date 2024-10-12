import { useContext, createContext, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { loginRequest, registerRequest } from "../services/auth-servce";
import { auth } from "../firebase";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const onRegister = (email, password) => {
    setIsLoading(true);

    registerRequest(email, password)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  // Logout function
  const onLogout = async () => {
    try {
      await signOut(auth); // Firebase sign out
      setUser(null); // Clear user state after logout
    } catch (error) {}
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); // Automatically manages user state
    setIsLoading(false);
    setError(null);
  });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
