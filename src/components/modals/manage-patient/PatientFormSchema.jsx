import * as yup from "yup";

export const schema = yup.object().shape({
  nama: yup
    .string()
    .required("Nama lengkap tidak boleh kosong")
    .max(25, "Nama lengkap tidak boleh lebih dari 25 karakter")
    .matches(/^[a-zA-Z0-9 ]*$/, "Nama tidak boleh mengandung simbol atau angka"),
  nik: yup
    .string()
    .required("NIK tidak boleh kosong")
    .length(16, "NIK harus 16 karakter")
    .matches(/^[0-9]*$/, "NIK hanya boleh berisi angka"),
  alamat: yup.string().required("Alamat tidak boleh kosong"),
  jenis_kelamin: yup.string().required("Jenis kelamin tidak boleh kosong"),
  tanggal_lahir: yup.date().required("Tanggal lahir tidak boleh kosong"),
});
