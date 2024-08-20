import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { InputFields } from '@/components/fields';

export const TanggalPeriksaFields = ({ control, error }) => {
  return (
    <Controller
      name="tanggal_periksa"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFields
            label="Tanggal Periksa"
            autoComplete="off"
            error={error}
            {...field}
            type="date"
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};
export const StartDateFields = ({ control, error }) => {
  return (
    <Controller
      name="start_date"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFields
            label="Tanggal Mulai"
            autoComplete="off"
            error={error}
            {...field}
            type="date"
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};
export const EndDateFields = ({ control, error }) => {
  return (
    <Controller
      name="end_date"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFields
            label="Tanggal Akhir"
            autoComplete="off"
            error={error}
            {...field}
            type="date"
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};


export const GdsFields = ({ control, error }) => {
    return (
      <Controller
        name="gds"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl isInvalid={error}>
            <InputFields
              label="Gula Darah Sementara"
              autoComplete="off"
              error={error}
              {...field}
              type="text"
            />
            <FormErrorMessage>{error?.message}</FormErrorMessage>
          </FormControl>
        )}
      />
    );
  };

  export const TekananDarahSistolikFields = ({ control, error }) => {
    return (
      <Controller
        name="tekanan_darah_sistolik"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl isInvalid={error}>
            <InputFields
              label="Tekanan Darah Sistolik"
              autoComplete="off"
              error={error}
              {...field}
              type="text"
            />
            <FormErrorMessage>{error?.message}</FormErrorMessage>
          </FormControl>
        )}
      />
    );
  };

  export const TekananDarahDiastolikFields = ({ control, error }) => {
    return (
      <Controller
        name="tekanan_darah_diastolik"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl isInvalid={error}>
            <InputFields
              label="Tekanan Darah Diastolik"
              autoComplete="off"
              error={error}
              {...field}
              type="text"
            />
            <FormErrorMessage>{error?.message}</FormErrorMessage>
          </FormControl>
        )}
      />
    );
  };

  export const NadiPerMenitFields = ({ control, error }) => {
    return (
      <Controller
        name="nadi_per_min"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl isInvalid={error}>
            <InputFields
              label="Nadi Permenit"
              autoComplete="off"
              error={error}
              {...field}
              type="text"
            />
            <FormErrorMessage>{error?.message}</FormErrorMessage>
          </FormControl>
        )}
      />
    );
  };

  export const FrekuensiNafasFields = ({ control, error }) => {
    return (
      <Controller
        name="frekuensi_napas_per_min"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl isInvalid={error}>
            <InputFields
              label="Frekuensi Nafas"
              autoComplete="off"
              error={error}
              {...field}
              type="text"
            />
            <FormErrorMessage>{error?.message}</FormErrorMessage>
          </FormControl>
        )}
      />
    );
  };

