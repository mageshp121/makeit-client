import { RecaptchaVerifier} from "firebase/auth";
import { RegisterFormData } from "../formvalidations/register";
import { FieldErrors } from "react-hook-form";


export type Otpfomevalue = {
      password:string
}

declare global {
      interface Window {
        recaptchaVerifier?: RecaptchaVerifier;
        confirmationResult?: any;
      }
    }
    
   export interface userSlice {
      user:{userData:{firstName?:string}}
    }

    export interface propsType {
      errors: FieldErrors<RegisterFormData>
    }
    
   export interface ErrorData {
      path: string;
      Message:string
    }

    export interface ErrorComponentProps {
      data: ErrorData;
    }