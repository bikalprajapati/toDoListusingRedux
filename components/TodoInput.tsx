import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

const TodoInput: React.FC = () => {
  const dispatch = useDispatch();

  const [taskInput, setTaskInput] = useState('');
  console.warn(taskInput);
  return (
    <View>
      <View style={styles.mainBox}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter a Task"
          onChangeText={text => setTaskInput(text)}
          value={taskInput}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            taskInput.length
              ? (dispatch({type: 'insert', payload: taskInput}),
                setTaskInput(''))
              : null;
          }}>
          <View>
            <Text style={styles.basicFont}>Insert</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  basicFont: {
    fontSize: 18,
    color: 'black',
  },
  inputBox: {
    width: '70%',
    backgroundColor: '#70787B',
    borderRadius: 10,
    padding: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#EDD7C1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '20%',
    padding: 2,
  },
  mainBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default TodoInput;
