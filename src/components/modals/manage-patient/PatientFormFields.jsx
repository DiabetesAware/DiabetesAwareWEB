import { Button, FormControl, FormErrorMessage, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDown, ChevronUp, Document } from "react-iconly";
import { Controller } from "react-hook-form";
import { InputFields } from "@/components/fields";
import { useState } from "react";
export function PatientNameFields({ control, error }) {
  return (
    <Controller
      name="nama"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFields
            label="Nama"
            placeholder="Nama"
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

export function PatientJenisKelaminFields({ control, error }) {
  return (
    <Controller
      name="jenis_kelamin"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFields
            label="Jenis Kelamin"
            placeholder="Jenis Kelamin"
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

export function PatientAlamatFields({ control, error }) {
  return (
    <Controller
      name="alamat"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFields
            label="Alamat"
            placeholder="Alamat"
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

export function PatientNikFields({ control, error }) {
  return (
    <Controller
      name="nik"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFields
            label="Nomor Induk Kependudukan"
            placeholder="Nomor Induk Kependudukan"
            type="text"
            maxLength={16}
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

export function PatientTglLahirFields({ control, error }) {
  return (
    <Controller
      name="tanggal_lahir"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <FormControl isInvalid={error}>
          <InputFields
            label="Tanggal Lahir"
            type="date"
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

export function SelectedGender({ control, error }) {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Controller
			name="jenis_kelamin"
			control={control}
			render={({ field }) => (
				<FormControl isInvalid={error}>
					<Menu>
						<MenuButton
							as={Button}
							px={4}
							py={2}
							width={"100%"}
							height={"53.6px"}
							transition="all 0.2s"
							borderRadius="lg"
							borderWidth="1px"
							borderColor={"#949494"}
							backgroundColor={"white"}
							_hover={{ bg: "gray.100" }}
							_expanded={{
								bg: "#073D5B",
								textColor: "white",
								textTransform: "capitalize",
								borderColor: "#073D5B",
							}}
							rightIcon={menuOpen ? <ChevronUp /> : <ChevronDown />}
							leftIcon={<Document />}
							onClick={handleMenuOpen}
							isActive={menuOpen}
							textAlign="left"
							fontWeight="normal"
							fontSize={"14px"}
						>
							{field.value || "Pilih Jenis Kelamin"}
						</MenuButton>
						<MenuList fontSize={"14px"}>
							<MenuItem
								onClick={() => {
									field.onChange("Laki-Laki");
								}}
							>
								Laki-Laki
							</MenuItem>
							<MenuItem
								onClick={() => {
									field.onChange("Perempuan");
								}}
							>
								Perempuan
							</MenuItem>
						</MenuList>
					</Menu>
					<FormErrorMessage>{error?.message}</FormErrorMessage>
				</FormControl>
			)}
		/>
	);
}
