import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helper/utils'

function craeteInstance(): AxiosInstance {
  const axios = new Axios()
  const instance = Axios.prototype.request.bind(axios)
  extend(instance, axios)
  return instance as AxiosInstance
}
const axios = craeteInstance()
export default axios
