import { forwardRef, useId } from "react";

export const InputFieldsWithLogo = forwardRef(
  ({ className, label, type, Logo, value, maxLength = "", ...props }, ref) => {
    const id = useId();

    return (
      <div className={`relative ${className}`}>
        <div className="absolute left-0 top-0 bottom-0 flex items-center">
          <div className="bg-[#073D5B] p-3.5 rounded-full">
            <Logo size={28} className="text-white" />
          </div>
        </div>
        <input
          ref={ref}
          type={type || "text"}
          value={value}
          maxLength={maxLength}
          id={`floating_outlined${id}`}
          className={`block pl-16 px-4 py-4 w-full text-sm text-gray-900 bg-white border border-[#073D5B] rounded-full ${
            props.error
              ? "border-red-600"
              : props.disabled
              ? "border-gray-300"
              : "border-gray-300"
          } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
          placeholder=" "
          autoComplete="off"
          onKeyDown={(e) => {
            if (type === "number") {
              const keysToPrevent = ["e", "E", "-", "+", ".", " ", ","];
              if (keysToPrevent.includes(e.key)) {
                e.preventDefault();
              }
            }
          }}
          {...props}
        />
      </div>
    );
  }
);

InputFieldsWithLogo.displayName = "InputFieldsWithLogo";
