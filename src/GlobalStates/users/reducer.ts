import { produce } from 'immer'
import { ActionReducer } from '../_prototype'
import { ReducerState } from './_prototype'

const INITIAL_STATE : ReducerState = {
  usersData: null,
  usersFetchState: '',
  usersDataError: null,

  postUserData: null,
  postUserState: '',
  postUserError: null,

  deleteUser: null,
  deleteUserState: '',
  deleteUserError: null,

  editUser: null,
  editUserState: '',
  editUserError: null,

  pageLimit: 0,
}

export const GET_USER_DATA = 'GET_USER_DATA'

export const POST_NEW_USER = 'POST_NEW_USER'

export const DELETE_USER = 'DELETE_USER'

export const PUT_USER = 'PUT_USER'

export const SET_PAGINATION_LIMIT = 'SET_PAGINATION_LIMIT'

export const actionReducer = produce((state: ReducerState = INITIAL_STATE, action: ActionReducer): ReducerState => {
  switch (action.type) {
    case `${GET_USER_DATA}_LOADING`:
      return {
        ...state,
        usersData: null,
        usersFetchState: 'loading',
        usersDataError: null,
      }
    case `${GET_USER_DATA}_SUCCESS`:
      return {
        ...state,
        usersData: action.payload,
        usersFetchState: 'success',
        usersDataError: null,
      }
    case `${GET_USER_DATA}_FAILED`:
      return {
        ...state,
        usersData: null,
        usersFetchState: 'error',
        usersDataError: action.payload,
      }

    case `${POST_NEW_USER}_LOADING`:
      return {
        ...state,
        postUserData: null,
        postUserState: 'loading',
        postUserError: null,
      }
    case `${POST_NEW_USER}_SUCCESS`:
      return {
        ...state,
        postUserData: action.payload,
        postUserState: 'success',
        postUserError: null,
      }
    case `${POST_NEW_USER}_FAILED`:
      return {
        ...state,
        postUserData: null,
        postUserState: 'error',
        postUserError: action.payload,
      }

    case `${DELETE_USER}_LOADING`:
      return {
        ...state,
        deleteUser: null,
        deleteUserState: 'loading',
        deleteUserError: null,
      }
    case `${DELETE_USER}_SUCCESS`:
      return {
        ...state,
        deleteUser: action.payload,
        deleteUserState: 'success',
        deleteUserError: null,
      }
    case `${DELETE_USER}_FAILED`:
      return {
        ...state,
        deleteUser: null,
        deleteUserState: 'error',
        deleteUserError: action.payload,
      }

    case `${PUT_USER}_LOADING`:
      return {
        ...state,
        editUser: null,
        editUserState: 'loading',
        editUserError: null,
      }
    case `${PUT_USER}_SUCCESS`:
      return {
        ...state,
        editUser: action.payload,
        editUserState: 'success',
        editUserError: null,
      }
    case `${PUT_USER}_FAILED`:
      return {
        ...state,
        editUser: null,
        editUserState: 'error',
        editUserError: action.payload,
      }

    case SET_PAGINATION_LIMIT:
      if (state.pageLimit !== 0) return state
      return {
        ...state,
        pageLimit: action.payload,
      }
    default:
      return state
  }
})

export default actionReducer
