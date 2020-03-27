import { AxiosOptions } from './types/index'
import { buildURL } from './helper/buildURL'
import { transformRequest } from './helper/data'
import { processHeaders } from './helper/headers'
import xhr from './xhr'
function axios(config: AxiosOptions): void {
  processConfig(config)
  xhr(config)
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
  transformRequest(config.data)
}
function transformHeaders(config: AxiosOptions): any {
  const { headers = null, data } = config
  return processHeaders(headers, data)
}
export default axios
