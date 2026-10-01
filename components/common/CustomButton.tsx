function CustomButton({
  title,
  onClick,
  type = 'button',
  className,
}: {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` rounded-full px-6 py-2 bg-primaryColor text-descriptionColor ${className}`}
    >
      {title}
    </button>
  );
}

export default CustomButton;
