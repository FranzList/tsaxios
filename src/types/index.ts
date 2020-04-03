export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosOptions {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}
export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosOptions
  request: any
}
export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}
export interface AxiosError extends Error {
  config: AxiosOptions
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}
export interface Axios {
  request<T = any>(config: AxiosOptions): AxiosPromise<T>

  get<T = any>(url: string, config?: AxiosOptions): AxiosPromise<T>

  post<T = any>(url: string, data?: any, config?: AxiosOptions): AxiosPromise<T>

  delete<T = any>(url: string, config?: AxiosOptions): AxiosPromise<T>

  head<T = any>(url: string, config?: AxiosOptions): AxiosPromise<T>

  options<T = any>(url: string, config?: AxiosOptions): AxiosPromise<T>

  put<T = any>(url: string, data?: any, config?: AxiosOptions): AxiosPromise<T>

  patch<T = any>(url: string, data?: any, config?: AxiosOptions): AxiosPromise<T>
}
export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosOptions): AxiosPromise<T>
  <T = any>(url: string, config?: AxiosOptions): AxiosPromise<T>
}
