import axios from '../../src/index'
axios.interceptors.request.use(config=>{
  console.log(config);
  config.headers.title='123'
  return config
})
axios.interceptors.response.use(config=>{
  config.data.hell = '345'
  return config
})
axios({
  url:'/interceptor/get',
  method:'get',
  headers:{
    mmp:'321'
  }
}).then(res=>{
  console.log(res);
})
