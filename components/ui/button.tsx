import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, children, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        className={cn(
          `
        w-auto
        rounded-full
        bg-black
        border
        border-y-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
        `,
          disabled && "opacity-75 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
