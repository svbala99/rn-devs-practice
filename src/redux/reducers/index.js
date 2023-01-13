// library imports
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

// user imports
import authReducer from './auth';
import addReducer from './addnotes';
//import countReducer from './count';

// persist config - rehydrating the store
const userPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
};

const addnotesPersistConfig = {
	key: 'addnotes',
	storage: AsyncStorage,
};

// const countPersistConfig = {
// 	key: 'count',
// 	storage: AsyncStorage,
// };

const AppReducer = combineReducers({
	auth: persistReducer(userPersistConfig, authReducer),
	addnote: persistReducer(addnotesPersistConfig, addReducer),
	//count: persistReducer(countPersistConfig, countReducer),
});

// exports
export default AppReducer;
