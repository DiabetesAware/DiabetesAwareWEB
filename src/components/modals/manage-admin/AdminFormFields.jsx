import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Hide, Lock, Message, Show, User } from "react-iconly";
import { Controller } from "react-hook-form";
import { InputFieldsWithLogo } from "@/components/fields";
import { useState } from "react";

export function AdminNameFields({ control, error }) {
  return (
    <Controller
      name="nama"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFieldsWithLogo
            label="Nama"
            Logo={User}
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
}

export function AdminEmailFields({ control, error }) {
  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFieldsWithLogo
            label={field.value ? "Email" : "Tambahkan Email"}
            Logo={Message}
            autoComplete="off"
            error={error}
            {...field}
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
}

export function AdminPasswordFields({ name, control, error, label }) {
  const [type, setType] = useState("password");

  const handleShowPassword = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <div className="relative">
            <InputFieldsWithLogo
              label={label || "Masukkan Kata Sandi"}
              Logo={Lock}
              type={type}
              error={error}
              {...field}
            />
            <button
              type="button"
              className="absolute z-10 inset-y-0 right-5 flex items-center"
              onClick={handleShowPassword}
            >
              {type === "password" ? <Show /> : <Hide />}
            </button>
          </div>
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
}
