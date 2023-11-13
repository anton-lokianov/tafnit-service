import React from "react";

const Select = React.forwardRef(
  ({ name, label, options, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="font-semibold">
          {label}
        </label>
        <select name={name} id={name} ref={ref} className="select" {...rest}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <p className="text-red-600 text-[0.8rem]">{error.message}</p>}
      </div>
    );
  }
);

export default Select;
