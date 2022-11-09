import { produce } from 'immer'
import { ActionReducer } from '../_prototype'
import { ReducerState } from './_prototype'

const INITIAL_STATE : ReducerState = {
  userDetail: null,
  userDetailState: '',
  userDetailError: null,

  userPosts: null,
  userPostsState: '',
  userPostsError: null,

  submitPosts: null,
  submitPostsState: '',
  submitPostsError: null,

  deletePost: null,
  deletePostState: '',
  deletePostError: null,
}

export const GET_DETAIL = 'GET_DETAIL'
export const GET_DETAIL_POSTS = 'GET_DETAIL_POSTS'

export const POST_DETAIL_POSTS = 'POST_DETAIL_POSTS'

export const DELETE_DETAIL_POSTS = 'DELETE_DETAIL_POSTS'

export const actionReducer = produce((state: ReducerState = INITIAL_STATE, action: ActionReducer): ReducerState => {
  switch (action.type) {
    case `${GET_DETAIL}_LOADING`:
      return {
        ...state,
        userDetail: null,
        userDetailState: 'loading',
        userDetailError: null,
      }
    case `${GET_DETAIL}_SUCCESS`:
      return {
        ...state,
        userDetail: action.payload,
        userDetailState: 'success',
        userDetailError: null,
      }
    case `${GET_DETAIL}_FAILED`:
      return {
        ...state,
        userDetail: null,
        userDetailState: 'error',
        userDetailError: action.payload,
      }

    case `${GET_DETAIL_POSTS}_LOADING`:
      return {
        ...state,
        userPosts: null,
        userPostsState: 'loading',
        userPostsError: null,
      }
    case `${GET_DETAIL_POSTS}_SUCCESS`:
      return {
        ...state,
        userPosts: action.payload,
        userPostsState: 'success',
        userPostsError: null,
      }
    case `${GET_DETAIL_POSTS}_FAILED`:
      return {
        ...state,
        userPosts: null,
        userPostsState: 'error',
        userPostsError: action.payload,
      }

    case `${POST_DETAIL_POSTS}_LOADING`:
      return {
        ...state,
        submitPosts: null,
        submitPostsState: 'loading',
        submitPostsError: null,
      }
    case `${POST_DETAIL_POSTS}_SUCCESS`:
      return {
        ...state,
        submitPosts: action.payload,
        submitPostsState: 'success',
        submitPostsError: null,
      }
    case `${POST_DETAIL_POSTS}_FAILED`:
      return {
        ...state,
        submitPosts: null,
        submitPostsState: 'error',
        submitPostsError: action.payload,
      }

    case `${DELETE_DETAIL_POSTS}_LOADING`:
      return {
        ...state,
        deletePost: null,
        deletePostState: 'loading',
        deletePostError: null,
      }
    case `${DELETE_DETAIL_POSTS}_SUCCESS`:
      return {
        ...state,
        deletePost: action.payload,
        deletePostState: 'success',
        deletePostError: null,
      }
    case `${DELETE_DETAIL_POSTS}_FAILED`:
      return {
        ...state,
        deletePost: null,
        deletePostState: 'error',
        deletePostError: action.payload,
      }

    default:
      return state
  }
})

export default actionReducer
