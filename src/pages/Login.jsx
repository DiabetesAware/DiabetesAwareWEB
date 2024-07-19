import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Show, Hide } from "react-iconly";
import { FaUser, FaKey } from "react-icons/fa";
import { InputFieldsWithLogo } from "@/components/fields/InputFieldsWithLogo";
import { useNavigate } from "react-router-dom";
import { useCustomToast } from "@/hooks";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, adminLoginSelector } from "@/store/auth";
import logo from "@/assets/logo.jpg";

export const Login = () => {
  // react hooks-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordType, setPasswordType] = useState("password");
  const { status, message } = useSelector(adminLoginSelector);

  // react-router-dom
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();

  // handler submit-form
  const handleOnSubmit = (data) => {
    dispatch(adminLogin(data)).then((res) => {
      console.log(res);
      if (!res.payload.status) {
        navigate("/dashboard");
      }
    });
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
        <div className="container">
          {/* Form */}
          <form
            className="px-16 py-20 w-6/12  mx-auto border bg-white rounded-3xl"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            {/* wrapper text */}
            <div className="wrapper-text my-5">
              <img
                src={logo}
                className="border mx-auto my-5 rounded-full"
                width={75}
                height={75}
                alt="Logo"
              />
              <h1 className="text-4xl font-bold text-center text-[#073D5B]">
                Selamat Datang
              </h1>
              <p className="text-[#073D5B] text-xl text-center capitalize mt-2">
                Silahkan login terlebih dahulu
              </p>
            </div>

            {/* wrapper input */}
            <div className="wrapper-input flex flex-col w-8/12 mx-auto">
              {/* email */}
              <Controller
                name="nik"
                control={control}
                defaultValue=""
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
              {errors.nik && (
                <span className="text-red-500 text-sm">
                  {errors.nik.message}
                </span>
              )}

              {/* Password */}
              <div className="relative">
                <Controller
                  name="password"
                  control={control}
                  defaultValue="" // Menentukan nilai default untuk menghindari uncontrolled input
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
            <div className="button-group mt-10 w-8/12 mx-auto">
              <button
                type="submit"
                className="text-white w-full tracking-widest uppercase bg-[#073D5B] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-5 mr-2 mb-2 "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
