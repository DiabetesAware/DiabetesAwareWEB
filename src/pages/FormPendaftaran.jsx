import { Controller } from "react-hook-form";
import { InputFields } from "@/components/fields/InputFields";
import { useForm } from "react-hook-form";
import { Footer } from "@/components/section/Footer";
import ilustrasi from "@/assets/ilustrasi-pendaftaran.png";
import NavbarBack from "@/components/navigation/NavbarBack";
const FormPendaftaran = () => {
  const { control, handleSubmit } = useForm();
  return (
    <>
      <NavbarBack />
      {/* Form Pendaftaran */}
      <div className="pt-5 px-10 bg-[#e7e7e7]">
        <p className="text-4xl p-4 font-bold text-[#073D5B]">Form Pendaftaran Akun Baru</p>
        <div className="wrapper p-32 bg-white grid items-center justify-center lg:grid-cols-2 shadow-xl rounded-t-3xl">
          <form
            className="form-register p-16 bg-white shadow-xl rounded-lg border"
            onSubmit={handleSubmit()}
          >
            {/* Nama Lengkap */}
            <div className="wrapper-input">
              <p>Nama Lengkap</p>
              <Controller
                name="fullname"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Nama Lengkap"
                    {...field}
                  />
                )}
              ></Controller>
            </div>

            {/* NIK */}
            <div className="wrapper-input mt-4">
              <p>Nomor Induk Kependudukan (NIK)</p>
              <Controller
                name="NIK"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <InputFields
                    type="number"
                    className="input-text"
                    placeholder="NIK"
                    {...field}
                  />
                )}
              ></Controller>
            </div>

            {/* Alamat */}
            <div className="wrapper-input mt-4">
              <p>Alamat</p>
              <Controller
                name="Alamat"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="Alamat"
                    {...field}
                  />
                )}
              ></Controller>
            </div>

            {/* TGL Lahir */}
            <div className="wrapper-input mt-4">
              <p>TGL Lahir</p>
              <Controller
                name="fullname"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <InputFields
                    type="text"
                    className="input-text"
                    placeholder="TGL Lahir"
                    {...field}
                  />
                )}
              ></Controller>
            </div>

            {/* Button */}
            <button className="w-full p-5 bg-[#073D5B] text-slate-100 font-semibold border rounded-lg mt-10">
              Daftar
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

export default FormPendaftaran;
