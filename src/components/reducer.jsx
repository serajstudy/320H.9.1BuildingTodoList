import {ACTIONS} from "./action";


export default function todoReducer (todos,action){
     switch (action.type) {
        case ACTIONS.ADD_TODO:
      return [
        { id: Date.now(), title: action.payload, completed: false, editing: false },
        ...todos,
      ];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    case ACTIONS.EDIT_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, editing: true } : todo
      );
    case ACTIONS.SAVE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.newTitle, editing: false }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}









     


    
    
    
    

