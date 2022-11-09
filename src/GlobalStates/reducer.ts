import { combineReducers } from 'redux'
import {
  actionReducer as users,
  ReducerState as UserReducerState,
} from './users'
import {
  actionReducer as userDetail,
  ReducerState as UserDetailReducerState,
} from './detail'

const reducers = combineReducers({
  users,
  userDetail,
})

export default reducers

export type RootReducerState = {
  users: UserReducerState,
  userDetail: UserDetailReducerState,
}
