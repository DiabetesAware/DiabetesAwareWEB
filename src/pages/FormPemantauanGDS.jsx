import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputFields } from "@/components/fields/InputFields";
import { Footer } from "@/components/section/Footer";
import NavbarBack from "@/components/navigation/NavbarBack";
import ilustrasi from "@/assets/ilustrasi-pendaftaran.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createGds } from "@/store/manage-gds/CreateGdsSlice";
import { authService } from "@/config";
import { axiosInstance } from "@/config/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  tanggal_periksa: yup.string().required("Tanggal periksa tidak boleh kosong"),
  gds: yup
    .number()
    .typeError("Gula Darah Sewaktu harus berupa angka")
    .required("Gula Darah Sewaktu tidak boleh kosong"),
  tekanan_darah_sistolik: yup
    .number()
    .typeError("Tekanan Darah Sistolik harus berupa angka")
    .required("Tekanan Darah Sistolik tidak boleh kosong"),
  tekanan_darah_diastolik: yup
    .number()
    .typeError("Tekanan Darah Diastolik harus berupa angka")
    .required("Tekanan Darah Diastolik tidak boleh kosong"),
  nadi_per_min: yup
    .number()
    .typeError("Nadi per menit harus berupa angka")
    .required("Nadi per menit tidak boleh kosong"),
  frekuensi_napas_per_min: yup
    .number()
    .typeError("Frekuensi Nafas per menit harus berupa angka")
    .required("Frekuensi Nafas per menit tidak boleh kosong"),
});

const FormPemantauanGDS = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("patient_token");
    console.log,"patientToken",(token)
    if (!token) {
      navigate("/form-pendaftaran");
    } else {
      authService.getUserData(token).then((data) => {
        if (data) {
          setUserData(data);
        } else {
          navigate("/form-pendaftaran");
        }
      });
    }
  }, [navigate]);

  const handleOnSubmit = async (formData) => {
    setLoading(true);
    try {

      const token = localStorage.getItem("patient_token");
      if (token) {
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
      }

      const res = await dispatch(createGds(formData));
      if (res.payload?.code === 201) {
        localStorage.removeItem("patient_token");
        console.log("Response from createGds", res);
        navigate("/done-gds");
      } else {
        console.error("Unexpected response:", res);
      }

    } catch (error) {
      console.error("Error creating GDS form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarBack />
      <div className="pt-5 xl:px-10 sm:p-5 bg-[#e7e7e7]">
        <p className="xl:text-4xl sm:text-lg xl:text-left sm:text-center xl:p-4 sm:p-2 font-bold text-[#073D5B]">
          Form Pemantauan
        </p>
        <div className="wrapper xl:p-32 sm:p-5 bg-white grid items-center justify-center lg:grid-cols-2 shadow-xl xl:rounded-t-3xl sm:rounded-3xl">
          <form
            className="form-register xl:p-16 sm:p-8 bg-white xl:shadow-xl rounded-lg xl:border"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            {/* Tanggal Tes */}
            <div className="wrapper-input">
              <p>Tanggal Test</p>
              <Controller
                name="tanggal_periksa"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="date"
                    className="input-text"
                    placeholder="Tanggal Periksa"
                    {...field}
                  />
                )}
              />
              {errors.tanggal_periksa && (
                <span className="text-red-500 text-sm">
                  {errors.tanggal_periksa.message}
                </span>
              )}
            </div>

            {/* Gula Darah Sewaktu (GDS) */}
            <div className="wrapper-input mt-4">
              <p>Gula Darah Sewaktu (GDS) (mg/dL)</p>
              <Controller
                name="gds"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Gula Darah Sewaktu (GDS) (mg/dL)"
                    {...field}
                  />
                )}
              />
              {errors.gds && (
                <span className="text-red-500 text-sm">
                  {errors.gds.message}
                </span>
              )}
            </div>

            {/* Tekanan Darah */}
            <div className="wrapper-input mt-4">
              <p>Tekanan Darah Sistolik</p>
              <Controller
                name="tekanan_darah_sistolik"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="number"
                    className="input-text"
                    placeholder="Tekanan Darah Sistolik"
                    {...field}
                  />
                )}
              />
              {errors.tekanan_darah_sistolik && (
                <span className="text-red-500 text-sm">
                  {errors.tekanan_darah_sistolik.message}
                </span>
              )}
            </div>

            <div className="wrapper-input mt-4">
              <p>Tekanan Darah Diastolik</p>
              <Controller
                name="tekanan_darah_diastolik"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="number"
                    className="input-text"
                    placeholder="Tekanan Darah Diastolik"
                    {...field}
                  />
                )}
              />
              {errors.tekanan_darah_diastolik && (
                <span className="text-red-500 text-sm">
                  {errors.tekanan_darah_diastolik.message}
                </span>
              )}
            </div>

            {/* Nadi */}
            <div className="wrapper-input mt-4">
              <p>Nadi</p>
              <Controller
                name="nadi_per_min"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Nadi Permenit"
                    {...field}
                  />
                )}
              />
              {errors.nadi_per_min && (
                <span className="text-red-500 text-sm">
                  {errors.nadi_per_min.message}
                </span>
              )}
            </div>

            {/* Frekuensi Nafas */}
            <div className="wrapper-input mt-4 mb-10">
              <p>Frekuensi Nafas</p>
              <Controller
                name="frekuensi_napas_per_min"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Frekuensi Nafas"
                    {...field}
                  />
                )}
              />
              {errors.frekuensi_napas_per_min && (
                <span className="text-red-500 text-sm">
                  {errors.frekuensi_napas_per_min.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="wrapper-input mt-10">
              <button
                className={`w-full xl:p-5 sm:p-2.5 bg-[#073D5B] hover:opacity-90 text-white font-semibold border rounded-lg xl:mt-10 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          <img
            src={ilustrasi}
            alt="Ilustrasi Pendaftaran"
            className="mx-auto order-none sm:mt-10 sm:order-first"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormPemantauanGDS;
