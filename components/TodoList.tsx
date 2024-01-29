import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

interface TodoListProps {}

interface Todo {
  task: string;

  index: number;
}

interface RootState {
  todo: {
    data: Todo[];
  };
}

const TodoList: React.FC<TodoListProps> = () => {
  const dispatch = useDispatch();
  let tasks = useSelector((state: RootState) => state.todo.data);

  console.log(tasks);
  return (
    <View style={styles.mainContainer}>
      {tasks.map((task, index) => (
        <View style={styles.main}>
          <View
            key={index}
            style={[
              styles.list,
              {backgroundColor: task.complete ? '#0E2E5C' : '#47311E'},
            ]}>
            <View style={styles.listBox}>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() =>
                    dispatch({type: 'changeStatus', payload: task})
                  }>
                  {task.complete ? (
                    <Text style={styles.basicFont}>✅</Text>
                  ) : (
                    <Text style={styles.basicFont}>❎</Text>
                  )}
                </TouchableOpacity>
                <Text style={styles.basicFont}>{task.task}</Text>
              </View>

              <TouchableOpacity
                onPress={() => dispatch({type: 'delete', payload: task})}>
                <View>
                  <Text style={styles.basicFont}>🗑</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      <Text>a</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  basicFont: {
    fontSize: 20,
    color: 'white',
  },
  mainContainer: {
    backgroundColor: '#0E2E5C',
    padding: 10,
    borderRadius: 5,
  },
  main: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    borderStyle: 'dotted',
  },
  container: {
    flexDirection: 'row',
    width: '30%',
    gap: 10,
    marginLeft: 0,
  },
  listBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  list: {},
});

export default TodoList;
