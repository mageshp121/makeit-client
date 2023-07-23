
import client  from "../baseUrl/axios.baseUrl"
import { Login_Api, Register_Api,Create_Course_Api,Create_lessoneApi } from "../endPoints/commen";
 
export const RegisterFn= async (data:object)=>{  
      try{
        return client().post(Register_Api,data)
      }catch(error){
        return error
      }
}


export const LoginFn = async (data:object)=>{
    try{
        return client().post(Login_Api,data);
    }catch(error){
        return error
    }
}


// export const CreateCourse = async(data:object)=>{
//   console.log(data);
//       try{
//         return client().post(Create_Course_Api,data,{ headers:{ 'Content-Type': 'multipart/form-data' }})
//       }catch(error){
//          return error
//       }
// }



// export const Create_lessone =async(data:object)=>{
//     console.log(data, ' <= api create lessone methode =>');
//     try{
//      return client().post(Create_lessoneApi,data,{ headers:{ 'Content-Type': 'multipart/form-data'}})
//     }catch(error){
//       console.log(error,'errorororo');
      
//       return error
//     }
    
// }