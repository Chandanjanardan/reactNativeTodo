import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // You should implement local user authentication logic here.
    // Check if the username and password match a local database or data source.
    // For this example, we'll use a simple hardcoded user.
    if (username === 'user' && password === '123') {
      navigation.navigate('TodoList');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={{ color: 'red' }}>{loginError}</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
