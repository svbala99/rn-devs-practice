// // library imports
import { all, put, takeLatest, call } from 'redux-saga/effects';

// // actions
import { AddTodo, RemoveTodo, EditTodo } from '../actions/addnotes';

// // types
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../types/addnotes';

function* addSaga() {
	yield put(AddTodo());
}
function* editSaga() {
	yield put(EditTodo());
}
function* removeSaga() {
	yield put(RemoveTodo());
}

function* workerSaga() {
	yield takeLatest(ADD_TODO, addSaga);
	yield takeLatest(EDIT_TODO, editSaga);
	yield takeLatest(REMOVE_TODO, removeSaga);
}

function* addnotesSaga() {
	yield all([call(workerSaga)]);
}

// exports
export default addnotesSaga;
