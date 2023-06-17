import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Otpfomevalue } from "../../utils/types/types";
import { useEffect, useState, useRef } from "react";
import { authentication } from "../../utils/config/firebase";
import { useSendOtp, useVerifyOtp } from "../../utils/customHooks/hook";
import { UseSomthingWentWrong, useOtpSubmit } from "../../utils/toastify/toasty";
import { useNavigate } from "react-router-dom";
import { UsegenerateRecaptcha } from "../../utils/customHooks/hook";

const Otp = () => {
  const [count, setCount] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [otpControler, setOtpControler] = useState(false);
  const Navigate = useNavigate();
  const isMountedRef = useRef(false);
  const phoneNumber = "+918590628664";
  const { register, control, handleSubmit } = useForm<Otpfomevalue>();

  const resendOTP = () => {
    isMountedRef.current = false;
    setOtpControler(true);
    setMinutes(1);
    setSeconds(30);
  };

  // This useEffect will create re-captcha only the initial render
  useEffect(() => {
    console.log("recatptcha verifier useEffect");
    UsegenerateRecaptcha(authentication);
  }, []);

  // This useEffect is sendinng the otp 
  // useEffect(() => {
  //   if (!isMountedRef.current) {
  //     console.log("useEffect calling ");
  //     if (window.recaptchaVerifier) {
  //       let appVerifier = window.recaptchaVerifier;
  //       useSendOtp(authentication, phoneNumber, appVerifier);
  //     }
  //     isMountedRef.current = true;
  //   }
  // }, [otpControler, isMountedRef.current, resendOTP]);

  // This useEffect is sets the timer for resend otp
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  // confirming that the user provided otp is curret or not
  const fromSubit = async (data: Otpfomevalue) => {
    setCount(count + 1);
    if (count <= 2) {
      await useVerifyOtp(data)
        .then((response) => {
          console.log(response, "response");
          if (response.sucess) Navigate("/");
        })
        .catch((err) => {
          console.log("err cathced ", err);
          UseSomthingWentWrong();
        });
    } else {
      useOtpSubmit("otp already submited please wait a second");
    }
  };

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
                <div className="countdown-text">
                  {seconds > 0 || minutes > 0 ? (
                    <p>
                      Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                  ) : (
                    <p>Didn't recieve code?</p>
                  )}

                  <button
                    disabled={seconds > 0 || minutes > 0}
                    style={{
                      color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                    }}
                    onClick={resendOTP}
                  >
                    Resend OTP
                  </button>
                </div>
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
