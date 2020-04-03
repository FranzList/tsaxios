const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
/**
 *
 * @desc 判断object
 */
export function isPlainObject(val: any): val is any {
  return toString.call(val) === '[object Object]'
}
export function isNumber(val: any): val is number {
  return typeof val === 'number'
}
export function isString(val: any): val is string {
  return typeof val === 'string'
}
export function forEach(obj: any, callback: Function): void {
  if (obj === null || typeof obj === 'undefined') return
  if (typeof obj !== 'object') {
    obj = [obj]
  }
  if (Array.isArray(obj)) {
    for (let index = 0; index < obj.length; index++) {
      callback.call(null, obj[index], index, obj)
    }
  } else {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        callback.call(null, obj[key], key, obj)
      }
    }
  }
}
export function extend<T, U>(to: T, form: U): T & U {
  for (const key in form) {
    ;(to as T & U)[key] = form[key] as any
  }
  return to as T & U
}
