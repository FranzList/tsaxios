import {AxiosOptions} from './types/index'
export default function xhr(config:AxiosOptions):void{
  const {data=null,url,method='get'} = {...config}
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(),url,true)
  request.send(data)
}