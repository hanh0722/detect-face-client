import { DropzoneOptions, useDropzone } from "react-dropzone";
import { isFunction } from "../../utils/types";

interface UseDropzoneControllerProps {
  config?: DropzoneOptions;
  onGetFile?: (value: Array<File>) => void;
}
const useDropzoneController = (props: UseDropzoneControllerProps) => {
  const { onGetFile, config } = props;


  const onGetFileDrop = (files: Array<File>) => {
    if (isFunction(onGetFile)) {
      onGetFile(files);
    }
  }
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: onGetFileDrop,
    multiple: false,
    ...(config || {}),
  });

  return {
    acceptedFiles,
    getRootProps,
    getInputProps
  }
};

export default useDropzoneController;