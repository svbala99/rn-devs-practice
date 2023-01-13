// // // library imports
// // import { all, put, takeLatest, call } from 'redux-saga/effects';

// <<<<<<< HEAD
// // // actions
// // import { addCountSuccess, addCountError, subCountSuccess, subCountError } from '../actions/count';
// =======
// // actions
// import { addCountSuccess, addCountError, subCountSuccess, subCountError  } from '../actions/count';
// >>>>>>> 73840be01b6c382860ea910c52c838c579fde4b8

// // // types
// // import { ADD_COUNT_LOADING, SUB_COUNT_LOADING } from '../types/count';

// // function* incrementSaga() {
// // 	try {
// // 		yield put(addCountSuccess());
// // 	} catch (_) {
// // 		yield put(addCountError());
// // 	}
// // }
// // function* decrementSaga() {
// // 	try{
// // 		yield put(subCountSuccess());
// // 	} catch (_) {
// // 		yield put(subCountError());
// // 	}
// // }

// <<<<<<< HEAD
// // function* workerSaga() {
// // 	yield takeLatest(ADD_COUNT_LOADING, incrementSaga);
// // 	yield takeLatest(SUB_COUNT_LOADING, decrementSaga)
// // }
// =======
// function* workerSaga() {
// 	yield takeLatest(ADD_COUNT_LOADING, incrementSaga);
// 	yield takeLatest(SUB_COUNT_LOADING, decrementSaga);
// }
// >>>>>>> 73840be01b6c382860ea910c52c838c579fde4b8

// // function* countSaga() {
// // 	yield all([call(workerSaga)]);
// // }

// // // exports
// // export default countSaga;
