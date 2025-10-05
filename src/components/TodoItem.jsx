import { useState } from "react";
import { ACTIONS } from "./action";


    export default function TodoItem ({todo, dispatch}){
        const [editText, setEditText] = useState(todo.title);

        const handleSave = () => {
        if (editText.trim() !== "") {
        dispatch({ type: ACTIONS.SAVE_TODO, payload: { id: todo.id, newTitle: editText } });
        }
    };


    return (
        <div className="todo-item">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.completed}
          onChange={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
        />
      </div>

      {todo.editing ? (
        <>
          <input
            type="text"
            className="form-control me-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="btn btn-primary btn-sm me-1" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span className={`me-2 ${todo.completed ? "completed" : ""}`}>{todo.title}</span>
          <button
            className="btn btn-secondary btn-sm me-1"
            onClick={() => dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })}
          > Edit </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
          > Delete </button>
        </>
      )}
    </div>




    );

}