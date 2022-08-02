import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  color: string;
  variant?: string;
  onClick?: (e?: any) => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  title?: string;
  type?: any;
  value?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    color,
    variant,
    onClick,
    disabled,
    className,
    fullWidth,
    title,
    type,
    value,
  } = props;

  return (
    <button
      className={`${color ? styles[color + "Btn"] : ""}
      ${variant ? styles[variant]: ''}
      ${disabled ? styles.disable : ''}
      ${className ? className :'' }
      ${fullWidth ? styles.fullWidth : ''}
      `}
      onClick={onClick}
      title={title}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
