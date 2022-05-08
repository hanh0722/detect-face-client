import React, { LegacyRef, RefObject } from "react";
import { ClassNameProps } from "./base";

export interface SizeImageProps {
  width?: number;
  height?: number
}
export interface ImageProps extends ClassNameProps, React.HTMLAttributes<HTMLImageElement> {
  src: string;
  onGetSizeImage?: (props: SizeImageProps) => void;
  ref?: LegacyRef<HTMLImageElement>
}
