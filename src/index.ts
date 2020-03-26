import {AxiosOptions} from './types/index'
import {buildURL} from './helper/buildURL'
import xhr from './xhr'
function axios(config:AxiosOptions):void{
  processConfig(config)
  xhr(config)
}
function processConfig (config: AxiosOptions): void {
  config.url = transformUrl(config)
}

function transformUrl (config: AxiosOptions): string {
  const { url, params } = config
  return buildURL(url, params)
}
export default axios
