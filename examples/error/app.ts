import axios,{AxiosError} from '../../src/index'
// axios({
//   method:'get',
//   url:'/error/timeout',
//   timeout:1000
// }).then(res=>{
//   console.log(res);
// }).catch((e:AxiosError)=>{
//   console.log(e.config);
//   console.log(e.code);
//   console.log(e.isAxiosError);
//   console.log(e.request);
//   console.log(e.response);
//   console.log(e.stack);
//   console.log(e.message);
 
// })
axios({
  url:'/error/get'
}).then(res=>{
  console.log(res);
}).catch((e:AxiosError)=>{
  console.log(e.message);
})
  
