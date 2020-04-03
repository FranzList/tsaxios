import { AxiosOptions, AxiosPromise, AxiosResponse } from '../types/index'
import { buildURL } from '../helper/buildURL'
import { transformRequest, transformResponse } from '../helper/data'
import { processHeaders } from '../helper/headers'
import xhr from './xhr'
export default function dispatchRequest(config: AxiosOptions): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}
function processConfig(config: AxiosOptions): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosOptions): string {
  const { url, params } = config
  return buildURL(url, params)
}
function transformRequestData(config: AxiosOptions): any {
  return transformRequest(config.data)
}
function transformHeaders(config: AxiosOptions): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
