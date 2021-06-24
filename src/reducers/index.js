import { combineReducers } from "redux";
import authReducer from './authReducer';
import appointmentsReducer from './appointmentsReducer';

const reducers = combineReducers({
    authReducer,
    appointmentsReducer,
});

export default reducers;