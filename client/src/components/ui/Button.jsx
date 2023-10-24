const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-3 shadow-sm shadow-black active:translate-y-[1px] rounded-md ${className}`}
      type={type}>
      {children}
    </button>
  );
};

export default Button;
