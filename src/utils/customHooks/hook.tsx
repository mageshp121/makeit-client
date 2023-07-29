import {
  signInWithPhoneNumber,
  ApplicationVerifier,
  Auth,
  signInWithPopup,
} from "firebase/auth";
import { useOtpSubmit } from "../toastify/toasty";
import { Otpfomevalue } from "../types/types";
import { RecaptchaVerifier, UserCredential } from "firebase/auth";
import { provider } from "../config/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtoken } from "../ReduxStore/slices/tokenSlice";
import { axiosPrivet } from "../api/baseUrl/axios.baseUrl";
import { useEffect } from "react";
import client from "../api/baseUrl/axios.baseUrl";
import { getRefersh } from "../api/endPoints/commen";



// This hook joins the object of strings and convertes into number
export const useConvertString = (data: object) => {
  const concatenatedValue = Object.values(data).join(""); // joins all the valuee
  return concatenatedValue;
};

// custom hook for send otp
export const useSendOtp = (
  auth: Auth,
  number: string,
  appVerifier: ApplicationVerifier
) => {
  console.log(typeof(number));
  console.log(number,'number');
  signInWithPhoneNumber(auth, number, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
    })
    .catch((error) => {
      console.log(error);
      return useOtpSubmit(
        "sorry too many attempts please try after some times"
      );
    });
};



export const UsegenerateRecaptcha = (auth: Auth) => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
    },
    auth
  );
};

// custom hook for verfying the otp
export const useVerifyOtp = async (data: Otpfomevalue): Promise<any> => {
  let otp = useConvertString(data);
  if (otp.length === 6) {
    console.log(otp, "otp");
    let confirmationResult = window.confirmationResult;
    return new Promise((resolve, reject) => {
      confirmationResult
        .confirm(otp)
        .then((result: any) => {
          resolve({ sucess: true, data: result });
        })
        .catch((error: any) => {
          console.log(error);
          reject({ status: false });
        });
    });
  }
};

// custom hook for google sign in
export const useGoogleSignIn = async (auth: Auth): Promise<any> => {
  return new Promise((resolve, reject) => {
    console.log("promise entered");
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        console.log("working");
        resolve({
          status: true,
          userEmail: result.user.email,
          userProfileImageGooleUrl: result.user.photoURL,
        });
      })
      .catch((eror: any) => {
        console.log(eror, "error");
        reject(eror);
      });
  });
};


// custom hook for getting newaccess token using refresh token
export const useRefreshToken = () => {
  const dispatch = useDispatch();
  // const accesToken = useSelector((store: any) => store.token.token);
  // console.log(accesToken, "<=  accesstoken token from token slice => ");
  const refreshtoken: any = localStorage.getItem("Token");
  console.log(refreshtoken, '<= localStorage.getItem("Token") =>');
  const refresh = async () => {
    console.log('caling refers ap[iiiiii');
    // calling an api for getting new refersh token
    const headers = {
      'authorization': `Bearer ${refreshtoken}`,
      'Content-Type': 'application/json',
    }
    try {
    const responase: any = await client().get(getRefersh,{headers});
    console.log(responase, "<= getRefreshToken(refreshtoken) api =>");
    dispatch(addtoken(responase.data));
    return responase.data;
    } catch (error) {
      console.log(error,'errrrrrrrr');
      
    }
    
  };
  return refresh;
};


// axios intercepter hook
export const useAxiosePrivate = () => {
  const refersh = useRefreshToken();
  const accesToken = useSelector((store: any) => store.token.token);
  useEffect(() => {
    const requestIntercept = axiosPrivet.interceptors.request.use(
      (config) => {
        console.log(accesToken,'acceeeeeeeeee');
        
        console.log("requsrr inter");
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accesToken}`;
        }
        return config;
      },
    (error) =>{ 
        Promise.reject(error)
      }
    );

    const responaseIntercept = axiosPrivet.interceptors.response.use(
      (reponse) => reponse,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refersh();
          console.log(newAccessToken,'accccccesss tokennnnn');
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          prevRequest.headers["Content-Type"] = "multipart/form-data";
          return axiosPrivet(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivet.interceptors.request.eject(requestIntercept);
      axiosPrivet.interceptors.response.eject(responaseIntercept);
    };
  }, [accesToken, refersh]);

  return axiosPrivet;
};



// course publish hook
// export const usePublilsh =()=>{
//   const couseId = useSelector((store: CourseId) => store.course?.courseData);
//   const courseid = [...couseId];
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const axiosPrivet = useAxiosePrivate();
//     const publishCourse = async (id:string) => {
//     try {
//       const response = await axiosPrivet.patch(Publish_Cours+id);
//       if (!response) {
//         UseSomthingWentWrong();
//       } else {
//         dispatch(clearCourse());
//         dispatch(clearLesson());
//         navigate("/tutor/profile");
//       }
//     } catch (error) {
//       UseSomthingWentWrong();
//     }
//   };
//   return publishCourse
// }