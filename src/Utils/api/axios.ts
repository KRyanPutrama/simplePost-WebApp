import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

export default function customAxios<TResponse = any>(
  config: AxiosRequestConfig,
): AxiosPromise<TResponse> {
  // init axios instance with init config
  const instance = axios.create({
    baseURL: 'https://gorest.co.in/public/',
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
      Accept: '*/*',
      // Object: config.url,
      // User: stateData.user,
      // Verb: 'read',
    },
  })

  // interceptor REQUEST
  instance.interceptors.request.use((reqConfig) => reqConfig)

  // interceptor RESPONSE
  instance.interceptors.response.use(
    (resp) => Promise.resolve(resp),
    (err) => Promise.reject(err)
    ,
  )

  // return The Axios Promise
  return instance(config)
}
