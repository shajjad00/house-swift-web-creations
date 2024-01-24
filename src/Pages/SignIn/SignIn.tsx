import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import loginAnimation from "../../assets/animation/login-animation.json";

const SignIn: React.FC = () => {

  const authContext = useContext(AuthContext)!; // Non-Nullable Assertion
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleGoogleSignIn = async () => {
    try {
       await authContext.googleLogin();
        navigate("/");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };


  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 gap-6">
        <div className="md:w-1/2">
          <h2 className="font-bold text-2xl">Login</h2>
          <p className="text-sm mt-4">If you are already a member, easily log in</p>

          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 mr-2 flex items-center justify-center"
                />
                <p className="text-center">Remember Me</p>
              </div>
              <div className="font-medium text-sm underline underline-offset-2 cursor-pointer whitespace-nowrap">
                <p>Forget Password ?</p>
              </div>
            </div>
            <button className="w-full font-semibold text-white bg-[#060606] my-2 p-2 text-center" type="submit">
              Login
            </button>
            <div className="relative py-2 w-full flex items-center justify-center">
              <div className="w-full bg-black h-[1px] "></div>
              <p className="absolute text-lg text-black/40 bg-[#f5f5f5]">or</p>
            </div>
            <div onClick={handleGoogleSignIn} className="w-full font-semibold text-[#060606] my-2 bg-white border-2 border-black/40 p-2 text-center flex items-center justify-center cursor-pointer">
              <FcGoogle className="h-6 mr-2" />
              Sign In With Google
            </div>
            <div className="w-full font-semibold text-[#060606] my-2 bg-white border-2 border-black/40 p-2 text-center flex items-center justify-center cursor-pointer">
              <FaFacebook className="h-6 mr-2" />
              Sign In With Facebook
            </div>
            <div className="w-full flex items-center justify-center">
              <p className="text-[#060606] text-sm font-normal ">
                Don't have an account?
                <span className="font-semibold underline underline-offset-2 cursor-pointer">
                  Sign Up free
                </span>
              </p>
            </div>
          </form>
        </div>

        <div className="sm:block hidden w-1/2 md:flex items-center justify-center">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
