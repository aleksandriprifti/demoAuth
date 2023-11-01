import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setIsLoading("testToken");
    setIsLoading(false);
    console.warn("Logedin");
  };

  const logout = () => {
    setIsLoading(null);
    setIsLoading(true);
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// interface AuthProps {
//   authState?: { token: string | null; authenticated: boolean | null };
//   onRegister?: (email: string, password: string) => Promise<any>;
//   onLogin?: (email: string, password: string) => Promise<any>;
//   onLogout?: () => Promise<any>;
// }

// const TOKEN_KEY = "my_jwt";
// export const API_URL = "http://localhost:8081";
// const AuthContext = createContext<AuthProps>({});

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }: any) => {
//   const [authState, setAuthState] = useState<{
//     token: string | null;
//     authenticated: boolean | null;
//   }>({ token: null, authenticated: null });

//   useEffect(() => {
//     const loadToken = async () => {
//       const token = SecureStore.getItemAsync(TOKEN_KEY);
//       console.warn("stored", token);

//       if (token) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//         //   setAuthState({
//         //     token: token,
//         //     authenticated: true,
//         //   });
//       }
//     };

//     loadToken();
//   }, []);

//   const register = async (email: string, password: string) => {
//     try {
//       return await axios.post(`${API_URL}/users`, { email, password });
//     } catch (error) {
//       return { error: true, msg: (error as any).response.data.msg };
//     }
//   };

//   const login = async (email: string, password: string) => {
//     try {
//       const result = await axios.post(`${API_URL}/auth`, { email, password });

//       console.log(result);

//       setAuthState({
//         token: result.data.token,
//         authenticated: true,
//       });

//       axios.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${result.data.token}`;

//       await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

//       return result;

//     } catch (error) {
//       return { error: true, msg: (error as any).response.data.msg };
//     }
//   };

//   const logout = async () => {
//     // delete token from storage
//     await SecureStore.deleteItemAsync(TOKEN_KEY);

//     //update HTTP HEaders
//     axios.defaults.headers.common["Authorization"] = "";

//     // Reset auth state
//     setAuthState({
//       token: null,
//       authenticated: false,
//     });
//   };

//   const value = {
//     onRegister: register,
//     onLogin: login,
//     onLogout: logout,
//     authState,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
