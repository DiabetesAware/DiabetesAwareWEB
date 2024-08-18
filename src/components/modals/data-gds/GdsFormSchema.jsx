import * as yup from "yup"

export const schema = yup.object().shape({
tanggal_periksa: yup
    .date()
    .required("Tanggal Periksa wajib diisi")
    .typeError("Tanggal Periksa tidak valid"),
  gds: yup
    .number()
    .required("GDS wajib diisi")
    .positive("GDS harus lebih dari 0")
    .integer("GDS harus berupa angka bulat")
    .typeError("GDS tidak valid"),
  tekanan_darah_sistolik: yup
    .number()
    .required("Tekanan Darah Sistolik wajib diisi")
    .positive("Tekanan Darah Sistolik harus lebih dari 0")
    .integer("Tekanan Darah Sistolik harus berupa angka bulat")
    .typeError("Tekanan Darah Sistolik tidak valid"),
  tekanan_darah_diastolik: yup
    .number()
    .required("Tekanan Darah Diastolik wajib diisi")
    .positive("Tekanan Darah Diastolik harus lebih dari 0")
    .integer("Tekanan Darah Diastolik harus berupa angka bulat")
    .typeError("Tekanan Darah Diastolik tidak valid"),
  nadi_per_min: yup
    .number()
    .required("Nadi per menit wajib diisi")
    .positive("Nadi per menit harus lebih dari 0")
    .integer("Nadi per menit harus berupa angka bulat")
    .typeError("Nadi per menit tidak valid"),
  frekuensi_napas_per_min: yup
    .number()
    .required("Frekuensi Napas per menit wajib diisi")
    .positive("Frekuensi Napas per menit harus lebih dari 0")
    .integer("Frekuensi Napas per menit harus berupa angka bulat")
    .typeError("Frekuensi Napas per menit tidak valid"),
});