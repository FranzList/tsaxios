import axios,{AxiosError} from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  data: {
    msg:'hello post'
  }
}).then(res=>{
  console.log(res);
})