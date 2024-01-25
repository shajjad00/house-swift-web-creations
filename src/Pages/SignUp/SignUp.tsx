/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */

import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import animationLottie from "../../assets/animation/lottieFileRegister.json";
import Lottie from "lottie-react";
import { useForm, SubmitHandler } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Swal from "sweetalert2";
import { AuthContext, AuthContextType } from "../../AuthProvider/Provider";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  photoURL: string;
  termsAccepted: boolean;
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    // Handle the case when context is null
    return <div>Loading...</div>;
  }

  const { createUser, handleUpdateProfile } = authContext as AuthContextType;

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
    createUser(data.email, data.password).then((result: { user: any }) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      handleUpdateProfile(data.firstName + " " + data.lastName, data.photoURL)
        .then(() => {
          console.log("user updated");
          reset();
          Swal.fire({
            title: "User Register successfully ",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
          navigate("/");
        })
        .catch((error: any) => {
          console.error(error);
        });
    });
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
              Create your account. It's free and only takes a minute
            </p>
            {/* form start here*/}
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
                    required: true,
                    minLength: 6,
                    maxLength: 16,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 16 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password have one Uppercase one lower case, one number must
                    and one special character.
                  </p>
                )}
              </div>
              {/* contact field phone */}
              <div className="mt-5">
                <PhoneInput
                  country={"bangladesh"}
                  {...register("phone")}
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(value) => setPhoneNumber(value)}
                />
              </div>
              {/* photo field  */}
              {/* <div className="mt-5">
                <input
                  type="file"
                  id="photoURL"
                  {...register("photoURL")}
                  className="w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div> */}
              <div className="mt-5">
                <input
                  type="checkbox"
                  {...register("termsAccepted")}
                  className="text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
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
                  Already have an account?
                  <span className="font-semibold underline underline-offset-2 cursor-pointer">
                    Sign In Please
                  </span>
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
