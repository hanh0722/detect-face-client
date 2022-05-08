import { RefObject, useEffect } from "react";
import { useState } from "react";
import usePrevious from "../../hook/usePrevious";

export interface UseImageControllerProps {
  ref?: RefObject<HTMLImageElement>;
  fallbackURL?: string;
  srcImage: string;
  onGetSizeImage?: (props: {width: number, height: number}) => void;
}

const DEFAULT_IMAGE = '/logo512.png'
const useImageController = (props: UseImageControllerProps) => {
  const { fallbackURL, srcImage } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [src, setSrc] = useState<string>(srcImage);
  const previousSrc = usePrevious(srcImage);

  useEffect(() => {
    if (previousSrc !== srcImage && previousSrc) {
      setSrc(srcImage);
    }
  }, [srcImage, previousSrc]);

  const onLoadImage = () => {
    if (src === DEFAULT_IMAGE) {
      setIsLoaded(true);
      return;
    }
    setIsLoaded(true);
    setSrc(srcImage);
  };

  const onError = () => {
    if (isLoaded) {
      return;
    }
    setSrc(fallbackURL || DEFAULT_IMAGE);
  }

  return {
    src,
    isLoaded,
    onError,
    onLoadImage
  }
}

export default useImageController;