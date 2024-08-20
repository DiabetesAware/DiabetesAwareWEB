import { FormControl, FormErrorMessage} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { InputFields } from '@/components/fields/InputFields';

export function GdpFields({ control, error }) {
	return (
		<Controller
			name="gdp"
			control={control}
			render={({ field }) => (
				<FormControl isInvalid={error}>
					<InputFields
						label={"Gula Darah Puasa"}
						autoComplete={"off"}
						error={error}
						{...field}
						type={"text"}
					/>
					<FormErrorMessage>{error?.message}</FormErrorMessage>
				</FormControl>
			)}
		/>
	);
}

export function GdsFields({ control, error }) {
	return (
		<Controller
			name="gds"
			control={control}
			render={({ field }) => (
				<FormControl isInvalid={error}>
					<InputFields
						label={"Gula Darah Sementara"}
						autoComplete={"off"}
						error={error}
						{...field}
						type={"text"}
					/>
					<FormErrorMessage>{error?.message}</FormErrorMessage>
				</FormControl>
			)}
		/>
	);
}

export function GdppFields({ control, error }) {
	return (
		<Controller
			name="gdpp"
			control={control}
			render={({ field }) => (
				<FormControl isInvalid={error}>
					<InputFields
						label={"Gula Darah 2 Jam PP"}
						autoComplete={"off"}
						error={error}
						{...field}
						type={"text"}
					/>
					<FormErrorMessage>{error?.message}</FormErrorMessage>
				</FormControl>
			)}
		/>
	);
}
