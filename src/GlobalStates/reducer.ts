import { combineReducers } from 'redux'
import {
  actionReducer as users,
  ReducerState as UserReducerState,
} from './users'

const reducers = combineReducers({
  users,
})

export default reducers

export type RootReducerState = {
  users: UserReducerState;
};
