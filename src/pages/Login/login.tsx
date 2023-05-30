import { useValidate, formSubmit} from "../../formvalidations/login";
import LoginButton from "../../sections/auth0/authLogin";
import LogoutButton from "../../sections/auth0/authLogout";

function Login() {
  const { errors, handleSubmit, register } = useValidate();
  return (
    <>
      <section className="bg-gradient-to-br h-screen from-blue-300 to-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
          <div className="w-full bg-white rounded-lg shadow-2xl  md:mt-0 sm:max-w-md xl:p-0   dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                className="space-y-4 md:space-y-2"
                  onSubmit={handleSubmit(formSubmit)}
              >
                {/* <div>
                {errors.firstName ? (
                  <span className="text-red-600">
                    {errors.firstName.message}
                  </span>
                ) : (
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                  >
                    First Name
                  </label>
                )}
                
              </div> */}
                {/* <div>
                {errors.lastName ? (
                  <span className="text-red-600">
                    {errors.lastName.message}
                  </span>
                ) : (
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                  >
                    Last Name
                  </label>
                )}
                
              </div> */}
                <div>
                  {errors.email ? (
                    <span className="text-red-600">{errors.email.message}</span>
                  ) : (
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    >
                      Your email
                    </label>
                  )}
                  <input
                    id="email"
                    className="bg-gray-50 shadow-md  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("email")}
                  />
                </div>

                <div>
                  {errors.password ? (
                    <span className="text-red-600">
                      {errors.password.message}
                    </span>
                  ) : (
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    >
                      password
                    </label>
                  )}
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 mb-6 shadow-md text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    {...register("password")}
                  />
                </div>


                <input
                  type="submit"
                  className="w-full shadow-lg text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                />
                <p className="text-sm  text-center font-light text-black dark:text-black">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium  pl-5  text-blue-800 hover:underline dark:text-primary-500"
                  >
                    Register
                  </a>
                </p>
              </form>
              <LoginButton/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
