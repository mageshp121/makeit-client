import client  from "../baseUrl/axios.baseUrl"
import { PostByid_Api, Post_Api } from "../endPoints/commen"

export const getAllPost = async ()=>{
    try{
        return await client().get(Post_Api)
    }catch(error){
        return error
    }
} 
export const getPost = async ()=> {
    try {
        return await client().get(PostByid_Api)
    }catch(error){
        return error
    }
}