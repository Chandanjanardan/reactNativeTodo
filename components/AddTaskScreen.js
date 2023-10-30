import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTaskScreen = ({ navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { tasks } = route.params;

  const handleAddTask = () => {
    // temp.push({id:2,title:title,description:description})
    // Implement a function to add the new task to the local database or storage.
    tasks = temp.concat({id:2,title:title,description:description})
    // Ensure you update the tasks state in TodoListScreen.
    navigation.navigate('TodoList');
  };

  return (
    <View>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default AddTaskScreen;
