import customAxios from '../../Utils/api/axios'
import * as proto from './_prototype'
import * as reducerLabel from './reducer'
import { fetchApi } from '../api'

export * from './_prototype'
export * from './reducer'

export const getUserData = (params?: proto.GetUserReq) => fetchApi<proto.GetUserRes_Data>({
  label: reducerLabel.GET_USER_DATA,
  action: (auth) => customAxios({
    url: '/v2/users',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth}`,
    },
    params: {
      ...params,
    },
  }),
  fulfilled(response, dispatch) {
    // console.log('response', response.headers)
    dispatch({ type: reducerLabel.SET_PAGINATION_LIMIT, payload: response?.headers?.['x-pagination-pages'] })
    return response.data
  },
  rejected(error) {
    return error
  },
})

export const postNewUser = (data: proto.PostNewUserReq) => fetchApi<proto.PostNewUserRes>({
  label: reducerLabel.POST_NEW_USER,
  action: (auth) => customAxios({
    url: '/v2/users',
    headers: {
      Authorization: `Bearer ${auth}`,
    },
    method: 'POST',
    data,
  }),
  fulfilled(response) {
    return response.data
  },
  rejected(error) {
    return error
  },
})

export const deleteUser = (data: proto.DeleteUserReq) => fetchApi<proto.DeleteUserRes>({
  label: reducerLabel.POST_NEW_USER,
  action: (auth) => customAxios({
    url: `/v2/users/${data.id}`,
    headers: {
      Authorization: `Bearer ${auth}`,
    },
    method: 'DELETE',
  }),
  fulfilled(response) {
    return response.data
  },
  rejected(error) {
    return error
  },
})

export const putUser = (data: proto.PutUserReq) => fetchApi<proto.PutUserRes>({
  label: reducerLabel.PUT_USER,
  action: (auth) => customAxios({
    url: `/v2/users/${data.id}`,
    headers: {
      Authorization: `Bearer ${auth}`,
    },
    method: 'PUT',
    data: {
      name: data.name,
      email: data.email,
      gender: data.gender,
      status: data.status,
    },
  }),
  fulfilled(response) {
    return response.data
  },
  rejected(error) {
    return error
  },
})
