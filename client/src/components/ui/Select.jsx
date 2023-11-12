const Select = ({ name, label, options, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <select name={name} id={name} className="select" {...rest}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
