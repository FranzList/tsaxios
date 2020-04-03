import { AxiosOptions, AxiosPromise, AxiosResponse } from '../types/index'
import { parseHeders } from '../helper/headers'
import { createError } from '../helper/error'

export default function xhr(config: AxiosOptions): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = { ...config }
    const request = new XMLHttpRequest()
    request.responseType = responseType || ''
    request.timeout = timeout || 0
    request.onreadystatechange = () => {
      if (request.readyState !== 4) return
      const responseHeaders = parseHeders(request.getAllResponseHeaders())
      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }
    request.onerror = () => {
      reject(createError('networkError', config, null, request))
    }
    request.ontimeout = () => {
      reject(createError(`Timeout of ${config.timeout} ms`, config, 'ECONNABORTED', request))
    }
    function handleResponse(response: AxiosResponse) {
      if (response.status >= 200 && response.status <= 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `request failed width status code ${response.status} `,
            config,
            null,
            request,
            response
          )
        )
      }
    }
    request.open(method.toUpperCase(), url!, true)
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.send(data)
  })
}
