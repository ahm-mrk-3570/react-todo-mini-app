import { useEffect, useRef } from "react";
import SignUpInput from "../../components/SignUpInput";
import { Link } from "react-router-dom";

export default function Login({ changeThemeFun, theme }) {
  const agreeI = useRef();

  function handleCheckbox() {
    if(agreeI.current.checked) {
      agreeI.current.checked = false;
    } else {
      agreeI.current.checked = true;
    }
  }

  return (
    <>
      <title>Login</title>

      <div className="w-full h-svh bg-main-light dark:bg-main-dark flex items-center justify-center font-google-sans ">
        <div className="w-10/12 h-10/12 bg-white mx-auto rounded-2xl p-2 flex">
          <div className="lg:w-1/2 xs:w-full sm:w-full xs:px-5 sm:px-5 md:px-5 md:w-full h-full">
            <form className="w-11/12 xs:w-full sm:w-full md:w-full h-full overflow-auto flex flex-col items-start justify-start py-5 gap-5 relative">
              <div className="w-full flex flex-row relative p-3">
                <h1 className="text-3xl font-google-sans w-full text-center">
                  Let's Start
                </h1>
                <button
                  onClick={changeThemeFun}
                  className="absolute right-0 top-0 p-3 bg-main-light dark:bg-main-dark dark:text-white rounded-xl cursor-pointer"
                >
                  <img src={theme === 'light' ? 'darkmode.svg' : 'lightmode.svg'} width="30px" />
                </button>
              </div>
              <SignUpInput
                imgsrc="username.svg"
                placeholder="Enter Username:"
              />
              <SignUpInput
                imgsrc="password.svg"
                placeholder="Enter Password:"
              />
              <div className="flex flex-col items-start justify-center gap-2 w-full">
                <div onClick={handleCheckbox} className="flex flex-row items-center justify-start gap-2 cursor-pointer relative">
                  <input ref={agreeI} onClick={handleCheckbox} type="checkbox" className="cursor-pointer" />
                  <span>Remember Me</span>
                </div>
                <button className="w-full min-h-15 text-center bg-main-light dark:bg-main-dark text-white hover:bg-main-dark hover:border-2
                   hover:border-main-light hover:text-white transition-all rounded-xl cursor-pointer">
                  Login
                </button>
                <span className="h-full flex flex-row items-center justify-center">
                  Already have an account?
                  <Link
                    className="text-blue-600 text-xl underline underline-offset-1 ms-1"
                    to="/signup"
                  >
                    Create a new
                  </Link>
                </span>
              </div>
            </form>
          </div>
          <div className="xs:hidden sm:hidden md:hidden lg:flex w-1/2 h-full relative overflow-hidden">
            <img
              src="/login/login-back-element.svg"
              className="max-w-3/4 absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
