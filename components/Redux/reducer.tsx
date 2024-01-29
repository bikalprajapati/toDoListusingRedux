// Define the types
interface Todo {
  task: string;
  complete: boolean;
}

interface TodoState {
  data: Todo[];
}

// Define action types
type TodoAction =
  | {type: 'insert'; payload: string}
  | {type: 'delete'; payload: Todo}
  | {type: 'changeStatus'; payload: Todo};

const initialState = {
  data: [
    {task: 'task1', complete: true},
    {task: 'task2', complete: false},
  ],
};

export const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction,
) => {
  switch (action.type) {
    case 'insert':
      return {
        ...state,
        data: [...state.data, {task: action.payload, complete: false}],
      };
    case 'delete':
      const taskToDelete = action.payload;
      const newData = state.data.filter(task => task !== taskToDelete);
      return {
        ...state,
        data: newData,
      };
    case 'changeStatus':
      const taskStatusToggle = action.payload;
      const updatedData = state.data.map(task =>
        task === taskStatusToggle ? {...task, complete: !task.complete} : task,
      );
      return {
        ...state,
        data: updatedData,
      };

    default:
      return state;
  }
};
