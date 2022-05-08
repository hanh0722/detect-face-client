import React from "react";
import { ClassNameProps } from "./base";

export interface ButtonProps extends ClassNameProps, React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit';
  disabled?: boolean;
  isLoading?: boolean
}