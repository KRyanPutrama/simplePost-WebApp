import { ApiResponseError } from '../api/_prototype'

export interface ReducerState {
  usersData: GetUserRes_Data[] | null
  usersFetchState: '' | 'loading' | 'success' | 'error'
  usersDataError: ApiResponseError | null

  postUserData: PostNewUserRes | null
  postUserState: '' | 'loading' | 'success' | 'error'
  postUserError: ApiResponseError | null

  deleteUser: DeleteUserRes | null
  deleteUserState: '' | 'loading' | 'success' | 'error'
  deleteUserError: ApiResponseError | null

  pageLimit: number
}

export type GetUserReq = {
  page: number
}

export type GetUserRes_Data = {
  id: number,
  name: string,
  email: string,
  gender: string,
  status: string,
}

export type PostNewUserReq = {
  name: string,
  email: string,
  gender: string,
  status: string,
}

export type PostNewUserRes = Record<string, any>

export type DeleteUserReq = {
  id: number,
}

export type DeleteUserRes = Record<string, any>
