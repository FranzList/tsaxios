import axios from '../../src/index'

interface responseData<T = any>{
  code:number,
  result:T,
  message:string
}
interface User{
  name:string,
  age:number
}
function getUser<T>(){
 return axios<responseData<T>>('/extend/user')
 .then(res=>res.data)
}
async function test(){
  const user = await getUser<User>()
  if(user){
    console.log(user);
  }
}
test()
// axios({
//   method: 'post',
//   url: '/extend/post',
//   data:{
//     msg:'123'
//   }
// })


