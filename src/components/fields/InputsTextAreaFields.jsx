import { forwardRef, useId } from "react";


export const InputsTextAreaFields = forwardRef(

	({ className, label, ...props }, ref) => {
		const id = useId();

		return (
			<div className={`relative ${className}`}>
				<textarea
					ref={ref}
					id={`floating_outlined_input_${id}`}
					className={`resize-none block px-4 py-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border ${
						props.error ? "border-red-600" : "border-[#949494]"
					} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
					placeholder=" "
					autoComplete="off"
					{...props}
				/>

				<label
					htmlFor={`floating_outlined_input_${id}`}
					className={`absolute text-sm ${
						props.error ? "text-red-600" : "text-gray-500"
					} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:px-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-8 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text`}
				>
					{label}
				</label>
			</div>
		);
	}
);

InputsTextAreaFields.displayName = "InputsTextAreaFields";