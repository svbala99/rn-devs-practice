import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../types/addnotes';

const INITIAL_STATE = { todos: [] };

const todoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [
					...state.todos,
					[action.payload.title, action.payload.description],
				],
			};
		case EDIT_TODO:
			return {
				todos: handleUpdateTodo(
					action.payload,
					state.todos,
					action.payload.index,
				),
			};
		case REMOVE_TODO:
			return { todos: handleRemoveTodo(action.payload, state.todos) };
		default:
			return state;
	}
};
const handleUpdateTodo = (item, todos, index) => {
	const data = [item.title, item.description];
	todos.splice(index, 1);
	todos.splice(index, 0, data);
	return todos;
};

const handleRemoveTodo = (item, todos) => {
	const todoIndex = todos.indexOf(item);
	todos.splice(todoIndex, 1);
	return todos;
};
export default todoReducer;
