import { Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../utils/ReduxStore/store/Store';
import { UseSomthingWentWrong } from '../utils/toastify/toasty';


  



const ProtectedRoute = ({children}:{children:any}) => {
    const user = useSelector((stor:any) => stor?.token?.token);
    // const location = useLocation()
    // console.log(location,'location===========>');
    
    if(!user) {
        UseSomthingWentWrong()
        return <Navigate to="/tutor/login"  />
    }
 return children

};

export default ProtectedRoute;


//  export const TutorPublicRoute = ({children}:{children:any})=>{
//     const user = useSelector((stor:any) => stor?.token?.token);
//     const location:any = useLocation();
//     console.log(location,'location===========>');
//     if(!user){
//         return children
//     }
//     if(location?.pathname ===  "/tutor/login" ) {
//         return children
//     }else{
//         return <Navigate to={location?.pathname}  />
//     }
    
// }
