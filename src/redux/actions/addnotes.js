import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../types/addnotes";

const AddTodo = payload => ({type: ADD_TODO, payload});

const RemoveTodo = payload => ({type: REMOVE_TODO, payload});

const EditTodo = payload => ({type: EDIT_TODO, payload});

export {AddTodo, RemoveTodo, EditTodo} ;
