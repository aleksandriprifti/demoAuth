import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthProvider, useAuth } from "./app/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { AuthContext } from "./app/context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const { isLoading, userToken } = useContext(AuthContext);
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

export const Layout = () => {
  //const { authState, onLogin, onLogout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => <Button title="Sign Out" />,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
