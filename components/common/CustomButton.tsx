function CustomButton({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={` rounded-full px-6 py-2 bg-primaryColor text-descriptionColor ${className}`}
    >
      {title}
    </button>
  );
}

export default CustomButton;
