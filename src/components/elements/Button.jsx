import clsx from "clsx";

function getClassName({ className }) {
  return clsx(
    "text-white rounded text-lg font-bold transition duration-300 cursor-pointer focus:ouline-none focus:ring-2 focus:ring-opacity-50"
  );
}

const sizes = {
  small: "px-3 py-4",
  medium: "px-6 py-4",
  large: "w-full px-4 py-3",
};

const variants = {
  primary: "bg-amber-500 focus:ring-amber-500",
  secondary: "bg-rose-700 focus:ring-rose-700",
  dark: "bg-black focus:ring-white",
};

const Button = ({
  children,
  className,
  size = "small",
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      className={clsx(
        sizes[size],
        variants[variant],
        getClassName({ className })
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
