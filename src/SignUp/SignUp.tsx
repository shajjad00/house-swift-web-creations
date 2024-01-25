/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import animationLottie from "../assets/animation/lottieFileRegister.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#9F7AEA] to-[#FEE2FE]">
      <div className="container mx-auto py-14">
        {/* left side logo and animation */}
        <div className="w-8/12 flex bg-white  mx-auto shadow-lg overflow-hidden ">
          <div className="sm:block hidden w-1/2 md:flex items-center justify-center">
            <Lottie animationData={animationLottie} loop={true} />
          </div>
          {/* form header  */}
          <div className=" md:w-1/2 w-full py-16 px-14">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account.Its free and only take a minute
            </p>
            {/* form  start here*/}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="FirstName"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="LastName"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Password"
                  className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>
              {/* contact field phone */}

              <div className="mt-5">
                <PhoneInput
                  country={"bangladesh"}
                  {...register("phone")}
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(value: React.SetStateAction<string>) =>
                    setPhoneNumber(value)
                  }
                />
              </div>
              <div className="mt-5">
                <input
                  type="file"
                  id="photoURL"
                  {...register("photoURL")}
                  className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>
              <div className="mt-5">
                <input
                  type="checkbox"
                  {...register("termsAccepted")}
                  className=" text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <span>
                  I accept the
                  <a
                    href="#"
                    className="font-semibold underline underline-offset-2 cursor-pointer"
                  >
                    terms of Use
                  </a>
                  &{" "}
                  <a
                    href="#"
                    className="font-semibold underline underline-offset-2 cursor-pointer"
                  >
                    privacy policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <input
                  type="submit"
                  className="w-full font-semibold text-[#060606] my-2 bg-white rounded-md  border-2 border-black/40  p-2 text-center flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="mt-5">
                <p className="py-1 px-2 w-full">
                  Already have a account?
                  <Link to="/login"><span className="font-semibold underline underline-offset-2 cursor-pointer">
                    Please Sign In
                  </span></Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
