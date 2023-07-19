import {
  signInWithPhoneNumber,
  ApplicationVerifier,
  Auth,
  signInWithPopup
} from "firebase/auth";
import {  useOtpSubmit } from "../toastify/toasty";
import { Otpfomevalue, googleData } from "../types/types";
import { RecaptchaVerifier,UserCredential,AuthError } from "firebase/auth";
import { provider } from "../config/firebase";





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


export const UsegenerateRecaptcha = (auth:Auth) => {
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
    return new Promise((resolve,reject)=>{
      confirmationResult
      .confirm(otp)
      .then((result: any) => {
        resolve({ sucess: true, data: result }) ;
      })
      .catch((error: any) => {
        console.log(error);
        reject({ status: false });
      });
    })
  }
};



// custom hook for google sign in
export const useGoogleSignIn =async(auth:Auth):Promise<googleData>=>{
       return new Promise ((resolve,reject)=>{
        console.log('promise entered');
            signInWithPopup(auth,provider).then((result:UserCredential)=>{
              console.log('working');
                resolve({status:true,userEmail:result.user?.email, userProfileImageGooleUrl:result.user.photoURL})
            }).catch((eror:any)=>{
              console.log(eror,'error');
               reject(eror)
            })
       })
}