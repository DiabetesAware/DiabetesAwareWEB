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
import { Button } from "@chakra-ui/react";
import { axiosInstance } from "@/config/axios";

const FormPemantauanGDS = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("tokenPatient");
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

  const handleOnSubmit = (formData) => {
    const token = localStorage.getItem("tokenPatient");
    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
    const combinedData = {
      ...formData,
      patient_id: userData?.id,
    };

    dispatch(createGds(combinedData))
      .then((res) => {
        console.log("Response from createGds",res)
        if (!res.payload?.status) {
          navigate("/done-gds");
        }
      })
      .catch((error) => {
        console.error("Error creating GDS form:", error);
      });
  };

  return (
    <>
      <NavbarBack />
      <div className="pt-5 px-10 bg-[#e7e7e7]">
        <p className="text-4xl p-4 font-bold text-[#073D5B]">Form Pemantauan</p>
        <div className="wrapper p-32 bg-white grid items-center justify-center lg:grid-cols-2 shadow-xl rounded-t-3xl">
          <form
            className="form-register p-16 bg-white shadow-xl rounded-lg border"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            {/* Tanggal Tes */}
            <div className="wrapper-input">
              <p>Tanggal Test</p>
              <Controller
                name="tanggal_periksa"
                control={control}
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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
                name="frekuensi_nafas_per_min"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Frekuensi Nafas"
                    {...field}
                  />
                )}
              />
              {errors.frekuensi_nafas_per_min && (
                <span className="text-red-500 text-sm">
                  {errors.frekuensi_nafas_per_min.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="wrapper-input mt-10">
              <Button bg={"#073D5B"} color={"#fff"} type="submit">
                Submit
              </Button>
            </div>
          </form>
          <div className="illustration hidden lg:flex justify-center">
            <img src={ilustrasi} alt="Ilustrasi Pendaftaran" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormPemantauanGDS;
