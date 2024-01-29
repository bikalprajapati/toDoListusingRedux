import React from 'react';
import {Provider} from 'react-redux';
import {store} from './components/Redux/store';
import {StyleSheet, Text, View} from 'react-native';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Homepage>
          <TodoInput />
          <TodoList />
        </Homepage>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#666666',
    justifyContent: 'center',
    marginTop: 200,
    borderRadius: 20,
    padding: 15,
  },
});

export default App;
