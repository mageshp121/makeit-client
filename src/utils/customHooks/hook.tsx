import {
  signInWithPhoneNumber,
  ApplicationVerifier,
  Auth,
} from "firebase/auth";
import { UseSomthingWentWrong, useOtpSubmit } from "../toastify/toasty";
import { Otpfomevalue } from "../types/types";
import { RecaptchaVerifier } from "firebase/auth";


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
