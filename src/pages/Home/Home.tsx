import { useEffect } from "react"
import { toast } from "react-toastify"

 const Home =()=>{
    useEffect(()=>{
        console.log('calling......?');
        toast.success('Welcome to makeit 🚀', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    },[])
    return(

        <div className="text-center ">
        <h1 className="text-3xl">HOME PAGE</h1>
        </div>
        
    )
}
export default Home