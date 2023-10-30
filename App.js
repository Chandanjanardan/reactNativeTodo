import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Button } from 'react-native';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import TodoListScreen from './components/TodoListScreen';
import AddTaskScreen from './components/AddTaskScreen';
import TaskDetailScreen from './components/TaskDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
   



    

    <NavigationContainer>
    <Stack.Navigator initialRouteName={user ? 'TodoList' : 'Signup'}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="TodoList" component={TodoListScreen} />
     
    </Stack.Navigator>
  </NavigationContainer>

    
    
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
