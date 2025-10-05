import { useState } from "react";
import { ACTIONS } from "./actions";


    export default function TodoItem ({todo, dispatch}){
        const [editText, setEditText] = useState(todo.title);

        const handleSave = () => {
        if (editText.trim() !== "") {
        dispatch({ type: ACTIONS.SAVE_TODO, payload: { id: todo.id, newTitle: editText } });
        }
    };


    return (



        
    )










}