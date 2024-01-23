import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignIn = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 gap-6">
        <div className="md:w-1/2">
          <h2 className="font-bold text-2xl">Login</h2>
          <p className="text-sm mt-4">If you already a member ,easily log in</p>
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
            <div className="flex items-center justify-between space-y-3">
              <div className="flex items-center justify-between ">
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
            {/* login btn  */}

            <button className="w-full my-3 font-semibold text-white  p-2 text-center bg-[#09BE51] hover:bg-transparent  py-1 text-lg px-6 md:ml-8 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer">
              Login
            </button>
            {/* divider  */}
            <div className="relative py-2 w-full flex items-center justify-center">
              <div className="w-full  bg-black h-[1px] "></div>
              <p className="absolute text-lg text-black/40 bg-[#f5f5f5]">or</p>
            </div>
            {/* social login */}
            <div className="w-full font-semibold text-[#060606] my-2 bg-white   border-2 border-black/40  p-2 text-center flex items-center justify-center cursor-pointer">
              <FcGoogle className="h-6 mr-2" />
              Sign In With Google
            </div>
            <div className="w-full my-3 font-semibold text-[#060606] my-2 bg-white   border-2 border-black/40  p-2 text-center flex items-center justify-center cursor-pointer">
              <FaFacebook className="h-6 mr-2" />
              Sign In With Facebook
            </div>
            {/* exist account  */}
            <div className="w-full mt-3 flex  items-center justify-center">
              <p className="text-[#060606] text-sm font-normal ">
                Dont have a account?
                <span className="font-semibold underline underline-offset-2 cursor-pointer">
                  Sign Up free
                </span>
              </p>
            </div>
          </form>
        </div>
        {/* banner/logo  */}
        <div className="sm:block hidden w-1/2 md:flex items-center justify-center">
          <img
            className="sm: rounded-2xl"
            src="https://i.ibb.co/5rmF67F/12469785-Wavy-REst-03-Single-01.jpg"
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
