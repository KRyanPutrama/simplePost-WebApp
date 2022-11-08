import { AxiosResponse, AxiosError } from 'axios'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import { ActionReducer } from '../_prototype'
import { ApiRequest, ApiResponse, ApiResponseError } from './_prototype'

export const fetchApi =
  <Res>({
    label, action, fulfilled, rejected,
  }: ApiRequest<Res>) => async (
    dispatch: Dispatch<ActionReducer<Res>> | Dispatch<AnyAction>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getState: () => any,
  ) => {
    dispatch({ type: `${label}_LOADING` })

    const token = '0b4aa19dc9fe16e4e94f36a2f337d241725050da2855e597843968697739f82c'

    return {
      type: label,
      payload: action(token || '')
        .then((response: AxiosResponse<ApiResponse<Res>>) => {
          // console.log('success', JSON.stringify(response, null, 2))
          const { data, headers } = response || {}
          // if (status === 200) {
          dispatch({
            type: `${label}_SUCCESS`,
            payload: fulfilled({ data, headers }, dispatch),
          })
          // } else {
          //   dispatch({
          //     type: `${label}_FAILED`,
          //     payload: rejected(data as ApiResponseError),
          //   })
          // }
        })
        .catch((responseError: AxiosError<ApiResponseError>) => {
          const errorData = responseError.response?.data
          dispatch({
            type: `${label}_FAILED`,
            payload: rejected(errorData as ApiResponseError),
          })
        }),
    }
  }
