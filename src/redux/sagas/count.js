// // library imports
// import { all, put, takeLatest, call } from 'redux-saga/effects';

// // actions
// import { addCountSuccess, addCountError, subCountSuccess, subCountError } from '../actions/count';

// // types
// import { ADD_COUNT_LOADING, SUB_COUNT_LOADING } from '../types/count';

// function* incrementSaga() {
// 	try {
// 		yield put(addCountSuccess());
// 	} catch (_) {
// 		yield put(addCountError());
// 	}
// }
// function* decrementSaga() {
// 	try{
// 		yield put(subCountSuccess());
// 	} catch (_) {
// 		yield put(subCountError());
// 	}
// }

// function* workerSaga() {
// 	yield takeLatest(ADD_COUNT_LOADING, incrementSaga);
// 	yield takeLatest(SUB_COUNT_LOADING, decrementSaga)
// }

// function* countSaga() {
// 	yield all([call(workerSaga)]);
// }

// // exports
// export default countSaga;
