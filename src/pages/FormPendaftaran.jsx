import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { InputFields } from "@/components/fields/InputFields";
import { useForm } from "react-hook-form";
import { Footer } from "@/components/section/Footer";
import NavbarBack from "@/components/navigation/NavbarBack";
import ilustrasi from "@/assets/ilustrasi-pendaftaran.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPatient } from "@/store/manage-patient/CreatePatientSlice";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  nama: yup.string().required("Nama lengkap wajib diisi"),
  nik: yup
    .string()
    .length(16, "NIK harus 16 digit")
    .required("NIK wajib diisi")
    .matches(/^[0-9]*$/, "NIK hanya boleh berisi angka"),
  alamat: yup.string().required("Alamat wajib diisi"),
  tanggal_lahir: yup.date().required("Tanggal lahir wajib diisi").nullable(),
});

const FormPendaftaran = () => {
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (data) => {
    setLoading(true);
    dispatch(createPatient(data))
      .then((res) => {
        console.log("Response from createPatient:", res);
        if (res.payload && res.payload.code === 201) {
          if (res.payload.data && res.payload.data.token) {
            console.log("ini token patient", res.payload.data.token);
            localStorage.setItem("patient_token", res.payload.data.token);
          } else {
            console.warn("Token is not present in the response.");
          }
          navigate("/form-gds");
        } else {
          console.error("Unexpected response structure:", res);
          setFeedbackMessage("Terjadi kesalahan saat mendaftar.");
        }
      })
      .catch((error) => {
        console.error("Error in createPatient:", error);
        setFeedbackMessage("Terjadi kesalahan saat mendaftar.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <NavbarBack />
      <div className="pt-5 xl:px-10 sm:p-5 bg-[#e7e7e7]">
        <p className="xl:text-4xl sm:text-lg xl:text-left  sm:text-center xl:p-4 sm:p-2 font-bold text-[#073D5B]">
          Form Pendaftaran Akun Baru
        </p>
        <div className="wrapper xl:p-32 sm:p-5 bg-white grid items-center justify-center lg:grid-cols-2  shadow-xl xl:rounded-t-3xl sm:rounded-3xl">
          <form
            className="form-register xl:p-16 sm:p-8 bg-white xl:shadow-xl rounded-lg xl:border"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            {feedbackMessage && (
              <p className="text-red-500 text-center mb-4">{feedbackMessage}</p>
            )}

            {/* Nama Lengkap */}
            <div className="wrapper-input">
              <p>Nama Lengkap</p>
              <Controller
                name="nama"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Nama Lengkap"
                    {...field}
                  />
                )}
              />
              {errors.nama && (
                <span className="text-red-500 text-sm">
                  {errors.nama.message}
                </span>
              )}
            </div>

            {/* NIK */}
            <div className="wrapper-input mt-4">
              <p>Nomor Induk Kependudukan (NIK)</p>
              <Controller
                name="nik"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Nomor Induk Penduduk"
                    maxLength={16}
                    {...field}
                  />
                )}
              />
              {errors.nik && (
                <span className="text-red-500 text-sm">
                  {errors.nik.message}
                </span>
              )}
            </div>

            {/* Alamat */}
            <div className="wrapper-input mt-4">
              <p>Alamat</p>
              <Controller
                name="alamat"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Alamat"
                    {...field}
                  />
                )}
              />
              {errors.alamat && (
                <span className="text-red-500 text-sm">
                  {errors.alamat.message}
                </span>
              )}
            </div>

            {/* TGL Lahir */}
            <div className="wrapper-input mt-4 mb-10">
              <p>Tanggal Lahir</p>
              <Controller
                name="tanggal_lahir"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="date"
                    className="input-text"
                    placeholder="Tanggal Lahir"
                    {...field}
                  />
                )}
              />
              {errors.tanggal_lahir && (
                <span className="text-red-500 text-sm">
                  {errors.tanggal_lahir.message}
                </span>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className={`w-full xl:p-5 sm:p-2.5 bg-[#073D5B] hover:opacity-90 text-white font-semibold border rounded-lg xl:mt-10  ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sedang Diproses..." : "Daftar"}
            </button>
          </form>
          <img
            className="mx-auto sm:mt-10 sm:order-first"
            src={ilustrasi}
            alt="Ilustrasi Pendaftaran"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FormPendaftaran;
