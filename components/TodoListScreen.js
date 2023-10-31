import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListScreen = ({ navigation }) => {
  const [newTodo, setNewTodo] = useState(''); // State for new TODO input
  const [todos, setTodos] = useState([
    { id: 1, title: 'Sample TODO 1', completed: false },
    { id: 2, title: 'Sample TODO 2', completed: true },
  ]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length + 1;
      const newTodoItem = { id: newId, title: newTodo, completed: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo(''); // Clear the input field
    }
  };

  const handleMarkCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>TODO</Text>

        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <Text
              style={[
                styles.todoTitle,
                { textDecorationLine: todo.completed ? 'line-through' : 'none' },
              ]}
            >
              {todo.title}
            </Text>
            <TouchableOpacity
              style={[
                styles.completedButton,
                { backgroundColor: todo.completed ? 'gray' : 'green' },
              ]}
              onPress={() => handleMarkCompleted(todo.id)}
            >
              <Text>{todo.completed ? 'Undo' : 'Completed'}</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TextInput
          style={styles.input}
          placeholder="Add New TODO"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={{ color: 'white' }}>Add New TODO</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  todoTitle: {
    color: 'white',
    flex: 1,
  },
  completedButton: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default TodoListScreen;
