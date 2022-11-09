import customAxios from '../../Utils/api/axios'
import * as proto from './_prototype'
import * as reducerLabel from './reducer'
import { fetchApi } from '../api'

export * from './_prototype'
export * from './reducer'

export const getDetail = (params?: proto.GetDetailReq) => fetchApi<proto.GetDetailRes>({
  label: reducerLabel.GET_DETAIL,
  action: (auth) => customAxios({
    url: `/v2/users/${params?.id}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  }),
  fulfilled(response) {
    return response.data
  },
  rejected(error) {
    return error
  },
})

export const getDetailPost = (params?: proto.GetDetailPostReq) => fetchApi<proto.GetDetailPostRes>({
  label: reducerLabel.GET_DETAIL_POSTS,
  action: (auth) => customAxios({
    url: `/v2/users/${params?.id}/posts`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  }),
  fulfilled(response) {
    return response.data
  },
  rejected(error) {
    return error
  },
})

export const postDetailPost = (data: proto.PostDetailPostReq) => fetchApi<proto.PostDetailPostRes>({
  label: reducerLabel.POST_DETAIL_POSTS,
  action: (auth) => customAxios({
    url: `/v2/users/${data.id}/posts`,
    headers: {
      Authorization: `Bearer ${auth}`,
    },
    method: 'POST',
    data: {
      title: data.title,
      body: data.body,
    },
  }),
  fulfilled(response) {
    return response.data
  },
  rejected(error) {
    return error
  },
})

export const deletePost = (data: proto.DeleteDetailPostReq) => fetchApi<proto.DeleteDetailPostRes>({
  label: reducerLabel.DELETE_DETAIL_POSTS,
  action: (auth) => customAxios({
    url: `/v2/posts/${data.id}`,
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
