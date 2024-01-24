import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import loginAnimation from '../../assets/animation/login-animation.json'
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto bg-gray-100 flex rounded-2xl shadow-lg p-5 gap-6">
        <div className="md:w-1/2">
          <h2 className="font-bold text-3xl text-center">Login</h2>
          <p className="text-sm mt-2 mb-5 text-center">If you already a member, easily log in</p>
          {/* form start here */}
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            {/* forget password and remind me */}
            <div className="flex items-center justify-between my-2 mb-4">
              <div className="flex items-center justify-between ">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2 flex items-center justify-center"
                />
                <p className="text-center">Remember Me</p>
              </div>
              <div className="font-medium text-sm underline cursor-pointer whitespace-nowrap">
                <p className="text-blue-600 font-semibold">Forget Password ?</p>
              </div>
            </div>
            {/* login btn  */}
            <button className="w-full font-semibold border bg-[#09BE51] hover:border hover:border-[#09BE51] hover:bg-transparent duration-300 hover:text-[#09BE51] text-white my-2 p-2 text-center ">

              Login
            </button>
            {/* divider  */}
            <div className="divider">Or
            </div>
            {/* social login */}
            <div className="w-full font-semibold text-[#060606] my-2 bg-white border border-black/40  p-2 text-center flex items-center justify-center cursor-pointer">
              <FcGoogle className="h-6 mr-2" />
              Sign In With Google
            </div>
            <div className="w-full font-semibold text-[#060606] my-2 bg-white border border-black/40  p-2 text-center flex items-center justify-center cursor-pointer">

              <FaFacebook className="h-6 mr-2" />
              Sign In With Facebook
            </div>
            {/* exist account  */}
            <div className="w-full flex items-center justify-center my-4">

              <p className="text-[#060606] text-sm font-normal ">
                Dont have any account ? &nbsp;
                <Link to="/register"><span className="font-semibold text-blue-500 underline cursor-pointer">
                  Sign Up
                </span></Link>
              </p>
            </div>
          </form>
        </div>
        {/* banner/logo  */}
        <div className="hidden w-1/2 md:flex items-center justify-center">
          {/* <img
            className="sm: rounded-2xl"
            src="https://i.ibb.co/5rmF67F/12469785-Wavy-REst-03-Single-01.jpg"
            alt="logo"
          /> */}
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
