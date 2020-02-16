import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import addWordReducer from './addWordReducer'
const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  addWordReducer:addWordReducer
});
export default rootReducer;
