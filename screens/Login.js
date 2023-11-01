import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
//import { API_URL, useAuth } from "../app/context/AuthContext";
import axios from "axios";
import { AuthContext } from "../app/context/AuthContext";

const Login = () => {
  const text = "Hello\nWellcome Back!";

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const { onLogin, onRegister } = useAuth();

  //   useEffect(() => {
  //     const testCall = async () => {
  //       const result = await axios.get(`${API_URL}/users`);
  //     };
  //     testCall();
  //   }, []);

  //   const login = async () => {
  //     const result = await onLogin!(email, password);
  //     if (result && result.error) {
  //       alert(result.msg);
  //     }
  //   };

  //   const register = async () => {
  //     const result = await onRegister!(email, password);
  //     if (result && result.error) {
  //       alert(result.msg);
  //     } else {
  //       login();
  //     }
  //   };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.greetingMess}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View>
          <TextInput
            style={styles.buttons}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.buttons}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Button onPress={() => login()} title="Sign In" />
          <Button title="Register" />
        </View>

        {/* <Button
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />  */}
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 200,
  },
  greetingMess: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  text: {
    fontSize: 34,
  },
  buttons: {
    padding: 15,
    marginVertical: 5,

    borderColor: "#black",
    borderWidth: 2,

    borderRadius: 5,
  },
});
