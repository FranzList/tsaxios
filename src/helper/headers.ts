import { isPlainObject } from './utils'
function normalizeHeaderName(headers: any, normalizeHeaderName: string): void {
  if (!headers) return
  Object.keys(headers).forEach(name => {
    if (name !== normalizeHeaderName && name.toUpperCase() === normalizeHeaderName.toUpperCase()) {
      headers[normalizeHeaderName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf8'
    }
  }
  return headers
}
export function parseHeders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) return parsed
  headers.split('\r\n').forEach(line => {
    let [key, value] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) return
    if (value) value = value.trim()
    parsed[key] = value
  })
  return parsed
}
