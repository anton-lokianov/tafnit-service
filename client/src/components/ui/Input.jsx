import React from "react";

const Input = React.forwardRef(({ name, label, icon, error, ...rest }, ref) => {
  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={name}
          className="block text-md font-medium text-slate-900">
          {label}
        </label>
      )}
      {icon && (
        <div className="absolute right-2 bottom-[5px]">
          {React.cloneElement(icon, { className: "h-6 w-6 text-slate-900" })}
        </div>
      )}
      <input
        ref={ref}
        id={name}
        name={name}
        {...rest}
        className="px-2 py-1 w-full border rounded-md outline-none transition duration-150 ease-in-out focus:border-indigo-500 
        focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:bg-slate-50"
      />
      {error && <p className="text-red-600 text-[0.8rem]">{error.message}</p>}
    </div>
  );
});

export default Input;
