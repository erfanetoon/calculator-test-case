import React, { FC, MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ children, className, onClick }) => {
    return (
        <button
            type="button"
            className={twMerge(
                "h-12 w-12 rounded-full bg-white text-red-500 mx-auto flex items-center justify-center shadow-lg active:shadow-sm transition-all duration-300",
                className,
            )}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
