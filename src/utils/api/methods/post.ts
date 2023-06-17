
import client  from "../baseUrl/axios.baseUrl"
import { Register_Api } from "../endPoints/commen";
 
export const RegisterFn= async (data:object)=>{  
      try{
         return client().post(Register_Api,data)
      }catch(error){
          return error
      }
}

