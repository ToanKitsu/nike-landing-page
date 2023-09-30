const Button = ({
  label,
  iconUrl,
  backGroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`
      flex justify-center items-center gap-2 px-7
    py-4 border font-montserrat text-lg leading-none rounded-full
    ${backGroundColor || "bg-coral-red"}
     ${textColor || "text-white"} ${borderColor || "border-coral-red"}
     ${fullWidth && "w-full"}
      `}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};
export default Button;
