import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(''); // Changed variable name

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-Type": "application/json" },
      mode:'cors',
      credentials: "include",
    });
    console.log(response)
    if (response.status === 200) {
      response.json().then(async (userInfo) => {
        try {
          await AsyncStorage.setItem('token', userInfo.token);
          alert("Login successfull")
          navigation.navigate('TodoList');
          setUserInfo(userInfo);
          console.log('Username:', userInfo.username);
        } catch (error) {
          console.error('Error storing token:', error);
        }
      });
    } else {
      alert("Wrogn credentail")
      setPasswordError("Wrong credentials"); // Set the error message
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={login} color="black" />
      <Text style={{ color: 'red' }}>{passwordError}</Text> {/* Display passwordError */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
