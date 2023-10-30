import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TaskDetailScreen = ({ route, navigation }) => {
  const { task } = route.params;
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSaveChanges = () => {
    // Implement a function to save the edited task to the local database or storage.
    
  
    task.title = editedTitle
    task.description = editedDescription
    // Ensure you update the tasks state in TodoListScreen.
    navigation.navigate('TodoList');
  };

  const handleTitleChange=(editedTitle)=>{
    setEditedTitle(editedTitle)
  }

  const handleDescriptionChange= (editedDescription)=>{
    setEditedDescription(editedDescription)
  }

  return (
    <View>
      <TextInput
        value={editedTitle}
        onChangeText={handleTitleChange}
      />
      <TextInput
        value={editedDescription}
        onChangeText={handleDescriptionChange}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

export default TaskDetailScreen;
