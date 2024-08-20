import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Show, Hide } from "react-iconly";
import { FaUser, FaKey } from "react-icons/fa";
import { InputFieldsWithLogo } from "@/components/fields/InputFieldsWithLogo";
import { useNavigate } from "react-router-dom";
import { useCustomToast } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, adminLoginSelector } from "@/store/auth";
import logo from "@/assets/logo.png";

const Login = () => {
  // react hooks-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // use-state
  const [passwordType, setPasswordType] = useState("password");
  const { status, message } = useSelector(adminLoginSelector);

  // react-router-dom
  const navigate = useNavigate();

  // dispatch
  const dispatch = useDispatch();

  // handler submit-form
  const handleOnSubmit = async (data) => {
    try {
      const res = await dispatch(adminLogin(data));
      if (res.payload.code === 200) {
        navigate("/dashboard");
      }
    }catch(error){
      throw error
    }
  };


  // handler showing password
  const handleShowPassword = (e) => {
    e.preventDefault();
    if (e.key !== "Enter") {
      setPasswordType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    }
  };

  useCustomToast(status, message);

  return (
    <>
      <div className="flex justify-center items-center mx-auto h-screen bg-[#073D5B]">
        <div className="container sm:p-5">
          {/* Form */}
          <form
            className="xl:px-16 xl:py-20 xl:w-6/12 sm:py-4 mx-auto border bg-white rounded-3xl"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            {/* wrapper text */}
            <div className="wrapper-text my-5">
              <img
                src={logo}
                className="rounded-full mx-auto my-5 xl:w-[225px] xl:h-[225px] sm:w-[150px] sm:h-[150px]"
                alt="Logo"
              />
              <h1 className="xl:text-4xl sm:text-2xl font-bold text-center text-[#073D5B]">
                Selamat Datang
              </h1>
              <p className="text-[#073D5B] xl:text-xl sm:text-sm text-center capitalize mt-2">
                Silahkan login terlebih dahulu
              </p>
            </div>

            {/* wrapper input */}
            <div className="wrapper-input flex flex-col xl:w-8/12 sm:w-10/12 mx-auto">
              {/* email */}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <InputFieldsWithLogo
                    type="text"
                    Logo={FaUser}
                    className="my-2 text-white"
                    placeholder="Email"
                    autoComplete="off"
                    {...field}
                  />
                )}
              />
              {/* error message email */}
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}

              {/* Password */}
              <div className="relative">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password harus lebih dari 5 huruf",
                    },
                  }}
                  render={({ field }) => (
                    <InputFieldsWithLogo
                      type={passwordType}
                      Logo={FaKey}
                      className="z-10 relative my-2"
                      placeholder="Password"
                      {...field}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSubmit(handleOnSubmit)();
                        }
                      }}
                    />
                  )}
                />

                {/* hide-seek button */}
                <button
                  type="button"
                  className="absolute z-10 w-auto right-5 inset-y-0 flex items-center"
                  onClick={handleShowPassword}
                >
                  {passwordType === "password" ? <Show /> : <Hide />}
                </button>
              </div>

              {/* errors massage password */}
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* wrapper button */}
            <div className="button-group xl:mt-10 sm:mt-5 xl:w-8/12 sm:w-10/12 mx-auto">
              <button
                type="submit"
                className="text-white w-full tracking-widest uppercase bg-[#073D5B] hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm xl:p-5 sm:p-3 mr-2 mb-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
