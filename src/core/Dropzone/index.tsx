import { FC } from "react";
import PropTypes from 'prop-types';
import { DropzoneProps } from "../../types/components/dropzone";
import { classList } from "../../utils/string";
import useDropzoneController from "./useDropzone";
import styles from "./styles.module.scss";

const Dropzone: FC<DropzoneProps> = (props) => {
  const { onGetFile, className, options, ...restProps } = props;
  const { getInputProps, getRootProps } = useDropzoneController({
    config: { ...(options || {}) },
    onGetFile: onGetFile
  });

  return (
    <div {...restProps} className={classList(styles.container, className)}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
};

Dropzone.defaultProps = {
  options: {},
  className: '',
  onGetFile: (files) => {}
};

Dropzone.propTypes = {
  options: PropTypes.object,
  className: PropTypes.string,
  onGetFile: PropTypes.func
}

export default Dropzone;
