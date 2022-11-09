import { ApiResponseError } from '../api/_prototype'

export type GetDetailReq = {
  id: number
}

export type GetDetailRes = {
  id: number
  name: string
  email: string
  gender: string
  status: string
}

export type GetDetailPostReq = {
  id: number
}

export type GetDetailPostRes = {
  id: number
  user_id: number,
  title: string
  body: string
}

export type PostDetailPostRes = Record<string, any>

export type PostDetailPostReq = {
  id: number,
  body: string,
  title: string,
}

export type DeleteDetailPostReq = {
  id: number
}

export type DeleteDetailPostRes = Record<string, any>

export interface ReducerState {
  userDetail: GetDetailRes | null
  userDetailState: '' | 'loading' | 'error' | 'success'
  userDetailError: ApiResponseError | null

  userPosts: GetDetailPostRes[] | null
  userPostsState: '' | 'loading' | 'error' | 'success'
  userPostsError: ApiResponseError | null

  submitPosts: PostDetailPostRes | null
  submitPostsState: '' | 'loading' | 'error' | 'success'
  submitPostsError: ApiResponseError | null

  deletePost: DeleteDetailPostRes | null
  deletePostState: '' | 'loading' | 'error' | 'success'
  deletePostError: ApiResponseError | null
}
