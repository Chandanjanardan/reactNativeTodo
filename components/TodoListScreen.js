import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const TodoListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([{id:1, title:"test", description:"abcdsjnvsv"}]);

  // You should implement task management logic here.
  // Fetch and display tasks from a local database or storage.

  const handleLogout = () => {
    // Implement a function to log out the user.
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>To-Do List:</Text>
      {/* Render the list of tasks here */}
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.title}</Text>
          <Text>{task.description}</Text>
          <Button
            title="Edit"
            onPress={() => navigation.navigate('TaskDetail', { task })}
          />
          <Button
            title="Mark as Complete"
            onPress={() => handleMarkComplete(task)}
          />
          <Button
            title="Delete"
            onPress={() => handleDeleteTask(task.id)}
          />
        </View>
      ))}
      <Button title="Add New Task" onPress={() => navigation.navigate('AddTask', {tasks,setTasks})} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default TodoListScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});