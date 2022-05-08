import { CSSProperties, PropsWithChildren } from "react";

export interface FunctionalComponentWithProps extends PropsWithChildren<unknown> {};

export interface ClassNameProps extends FunctionalComponentWithProps {
  className?: string;
  style?: CSSProperties
};