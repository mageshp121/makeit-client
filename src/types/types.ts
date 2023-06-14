import { RecaptchaVerifier} from "firebase/auth";


export type Otpfomevalue = {
      password1:string,
      password2:string,
      password3:string,
      password4:string,
      password5:string,
      password6:string,
}

declare global {
      interface Window {
        recaptchaVerifier?: RecaptchaVerifier;
        confirmationResult?: any;
      }
    }
    

