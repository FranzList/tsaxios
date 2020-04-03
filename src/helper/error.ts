import { AxiosOptions, AxiosResponse } from '../types/index'
export class AxiosError extends Error {
  config: AxiosOptions
  code?: string | null
  response?: AxiosResponse
  request?: any
  isAxiosError: boolean
  constructor(
    message: string,
    config: AxiosOptions,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.response = response
    this.request = request
    this.isAxiosError = true
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosOptions,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): AxiosError {
  const error = new AxiosError(message, config, code, response, request)
  return error
}
