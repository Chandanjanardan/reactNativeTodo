import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  // Function to navigate to the login screen
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  async function handleSignup() {
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        mode:'cors'
      });
      if (response.status === 200) {
        alert("Registration successful");
        navigation.navigate('Login');
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  console.log(username, password);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink} onPress={goToLogin}>Login</Text></Text>
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
      <Button title="Sign Up" onPress={handleSignup} color="black" />
      <Text style={{ color: 'red' }}>{signupError}</Text>
    </View>
  );
  
    
  
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    marginBottom: 10,
  },
  loginLink: {
    color: 'blue',
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

export default SignupScreen;


