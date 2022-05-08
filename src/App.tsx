import { FormEvent, useMemo, useRef, useState } from "react";
import { BoundingBoxContainer, Loading } from "./components";
import ParticleContainer from "./components/Particle";
import { Button, Dropzone } from "./core";
import Image from "./core/Image";
import useCallApi from "./hook/useCallApi";
import styles from "./styles.module.scss";
import { SizeImageProps } from "./types/components/image";
import { BoundingBox, FaceResponse } from "./types/request";
import { fileUploadFormData, genImageURL } from "./utils/file";
import { detectFace } from "./utils/request";
import { isArray } from "./utils/types";

function App() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [size, setSize] = useState<null | SizeImageProps>(null);
  const [boundingBox, setBoundingBox] = useState<BoundingBox | undefined>();

  const onDetectFaceHandler = (formData?: FormData) => {
    if (!formData) {
      return;
    }
    return detectFace(formData);
  };
  const onHandleSuccess = (data: FaceResponse) => {
    const { data: dataBoundingBox } = data;
    setBoundingBox(dataBoundingBox);
  };
  const { isLoading, onSendRequest } = useCallApi({
    request: onDetectFaceHandler,
    onSuccess: onHandleSuccess,
  });
  const onGetFileHandler = (files: Array<File>) => {
    if (isArray<File>(files) && files.length > 0) {
      setFile(files[0]);
    }
  };

  const onUploadHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!file) {
      return;
    }
    const formData = fileUploadFormData([file]);
    setSize({
      width: imageRef.current?.width,
      height: imageRef.current?.height
    })
    onSendRequest(formData);
  };
  const styleBoundingBox = useMemo(() => {
    if (isLoading || !boundingBox || !size) {
      return null;
    };
    const height = size.height || 300;
    const width = size.width || 500;
    const { bottom_row, left_col, right_col, top_row } = boundingBox;
    return {
      bottom: height - (bottom_row * height),
      left: left_col * width,
      right: width - (right_col * width),
      top: top_row * height
    }
  }, [isLoading, boundingBox, size]);

  return (
    <form onSubmit={onUploadHandler} className={styles.container}>
      <ParticleContainer />
      <Dropzone
        options={{
          multiple: false,
          maxFiles: 1,
        }}
        onGetFile={onGetFileHandler}
      />
      <Button
        disabled={isLoading || !file}
        className={styles.button}
        type="submit"
      >
        Upload
      </Button>

      {file && (
        <div className={styles.image}>
          {isLoading && (
            <div className={styles.loading}>
              <Loading />
            </div>
          )}
          {styleBoundingBox && 
          <BoundingBoxContainer className={styles.bounding} style={styleBoundingBox}/>}
          <Image ref={imageRef} src={genImageURL(file)} />
        </div>
      )}
      {!isLoading && !styleBoundingBox && <p className={styles.error}>Result: Undetect Face</p>}
    </form>
  );
}

export default App;
