import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Otpfomevalue } from "../../formvalidations/types/types";
import { useEffect, useState, useRef } from "react";
import { authentication } from "../../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: any;
  }
}
// custom hook
import { useConvertString } from "../../customHooks/hook";
// toastify hook
import { useOtpSubmit } from "../../toastify/toasty";
import { useNavigate } from "react-router-dom";


const Otp = () => {
  const [count, setCount] = useState(1);
  const Navigate = useNavigate();
  const phoneNumber = "+918590628664";
  const { register, control, handleSubmit } = useForm<Otpfomevalue>();
  const isMountedRef = useRef(false);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      authentication
    );
  };

  useEffect(() => {
    if (!isMountedRef.current) {
      console.log("useEffect calling ");
      generateRecaptcha();
      if (window.recaptchaVerifier) {
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
          })
          .catch((error) => {
            useOtpSubmit("sorry too many attempts please try after some times");
            console.log(error);
          });
      }
      isMountedRef.current = true;
    }
  }, []);
  const fromSubit = (data: Otpfomevalue) => {
    setCount(count + 1);
    if (count <= 3) {
      let otp = useConvertString(data);
      if (otp.length === 6) {
        console.log(otp, "otp");
        let confirmationResult = window.confirmationResult;
        confirmationResult
          .confirm(otp)
          .then((result: any) => {
            const user = result.user;
            console.log(user);
            Navigate("/Home");
          })
          .catch((error: any) => {
            console.log(error);
            useOtpSubmit("invalied otp");
          });
      }
    } else {
      useOtpSubmit("otp already submited please wait a second");
    }
  };

  // captch verify

  return (
    <>
      <section className="bg-gradient-to-br h-screen from-blue-300 to-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-black"
            >
              <img
                className="w-8 h-8 mr-2"
                src="src/images/network.png"
                alt="logo"
              />
              Makit
            </a>
          </div>
          <div className="w-full flex  bg-white rounded-lg shadow-2xl  md:mt-0 sm:max-w-md xl:p-0   dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                className="space-y-4 md:space-y-2"
                onSubmit={handleSubmit(fromSubit)}
                noValidate
              >
                <div className="grid grid-cols-6 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    ></label>
                    <input
                      id="passwor1"
                      className="bg-gray-50 mb-6 shadow-md text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password1", {
                        required: "otp is required",
                        maxLength: {
                          value: 1,
                          message: "OTP must be maximum 1 digits",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "OTP must contain only numbers",
                        },
                      })}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    ></label>
                    <input
                      id="passwor2"
                      className="bg-gray-50 mb-6 shadow-md text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password2", {
                        required: "otp is required",
                        maxLength: {
                          value: 1,
                          message: "OTP must be maximum 1 digits",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "OTP must contain only numbers",
                        },
                      })}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    ></label>
                    <input
                      id="passwor3"
                      className="bg-gray-50 mb-6 shadow-md text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password3", {
                        required: "otp is required",
                        maxLength: {
                          value: 1,
                          message: "OTP must be maximum 1 digits",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "OTP must contain only numbers",
                        },
                      })}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    ></label>
                    <input
                      id="password"
                      className="bg-gray-50 mb-6 shadow-md text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password4", {
                        required: "otp is required",
                        maxLength: {
                          value: 1,
                          message: "OTP must be maximum 1 digits",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "OTP must contain only numbers",
                        },
                      })}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    ></label>
                    <input
                      id="password"
                      className="bg-gray-50 mb-6 shadow-md text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password5", {
                        required: "otp is required",
                        maxLength: {
                          value: 1,
                          message: "OTP must be maximum 1 digits",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "OTP must contain only numbers",
                        },
                      })}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    ></label>
                    <input
                      id="password"
                      className="bg-gray-50 mb-6 shadow-md text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password6", {
                        required: "otp is required",
                        maxLength: {
                          value: 1,
                          message: "OTP must be maximum 1 digits",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "OTP must contain only numbers",
                        },
                      })}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  className="w-full shadow-lg  text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                />
              </form>
              <DevTool control={control} />
              <div id="recaptcha-container"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otp;
