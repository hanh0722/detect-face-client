import { DropzoneOptions } from "react-dropzone";
import { ClassNameProps } from "./base";

export interface DropzoneProps extends ClassNameProps {
  options?: DropzoneOptions;
  onGetFile?: (files: Array<File>) => void;
};
