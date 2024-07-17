import { Controller } from "react-hook-form";
import { InputFields } from "@/components/fields/InputFields";
import { useForm } from "react-hook-form";
import { Footer } from "@/components/section/Footer";
import NavbarBack from "@/components/navigation/NavbarBack";
import ilustrasi from "@/assets/ilustrasi-pendaftaran.png";

const FormPemantauanGDS = () => {
  const { control, handleSubmit } = useForm();
  return (
    <>
      <NavbarBack />
      {/* Form Pemantauan GDS */}
      <div className="pt-5 px-10 bg-[#e7e7e7]">
        <p className="text-4xl p-4 font-bold text-[#073D5B]">
          Form Pemantauan Gula Darah
        </p>
        <div className="wrapper p-32 bg-white grid items-center justify-center lg:grid-cols-2 shadow-xl rounded-t-3xl">
          <form
            className="form-register p-16 bg-white shadow-xl rounded-lg border"
            onSubmit={handleSubmit()}
          >
            {/* Tanggal Tes */}
            <div className="wrapper-input">
              <p>Tanggal Test</p>
              <Controller
                name="tanggal-test"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Tanggal Test"
                    {...field}
                  />
                )}
              ></Controller>
            </div>

            {/* NIK */}
            <div className="wrapper-input mt-4">
              <p>Gula Darah Puasa (GDP) (mg/dL)</p>
              <Controller
                name="GDP"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <InputFields
                    type="number"
                    className="input-text"
                    placeholder="Gula Darah Puasa (GDP) (mg/dL)"
                    {...field}
                  />
                )}
              ></Controller>
            </div>

            {/* Gula Darah Sewaktu (GDS) */}
            <div className="wrapper-input mt-4">
              <p>Gula Darah Sewaktu (GDS) (mg/dL)</p>
              <Controller
                name="GDS"
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
              ></Controller>
            </div>

            {/* Gula Darah 2 jam PP*/}
            <div className="wrapper-input mt-4">
              <p>Gula Darah 2 jam PP (GDPP) (mg/dL)</p>
              <Controller
                name="GDPP"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Gula Darah 2 jam PP (GDPP) (mg/dL)"
                    {...field}
                  />
                )}
              ></Controller>
            </div>

            {/* Button */}
            <button className="w-full p-5 bg-[#073D5B] text-slate-100 font-semibold border rounded-lg mt-10">
              Selanjutnya
            </button>
          </form>
          <img className="mx-auto" src={ilustrasi} alt="" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FormPemantauanGDS;
