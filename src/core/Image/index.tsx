import { forwardRef } from "react";
import useImageController from "./useImageController";
import styles from "./styles.module.scss";
import { LoaderBall } from "../../components";
import { classList } from "../../utils/string";
import { ImageProps } from "../../types/components/image";

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { src: srcImage } = props;
  const { src, onError, onLoadImage, isLoaded } = useImageController({
    srcImage: srcImage,
  });
  return (
    <>
      {!isLoaded && (
        <div className={classList(styles.loading)}>
          <LoaderBall />
        </div>
      )}
      <img
        onLoad={onLoadImage}
        onError={onError}
        style={{
          display: isLoaded ? "block" : "none",
        }}
        src={src}
        ref={ref}
        alt=""
      />
    </>
  );
});

export default Image;
