import { KEY_UPLOAD } from "../constant/key";

export const fileUploadFormData = (arrayFile: Array<File>) => {
  const formData = new FormData();
  arrayFile.forEach(item => {
    formData.append(KEY_UPLOAD, item);
  });
  return formData;
};

export const genImageURL = (file: File) => {
  return URL.createObjectURL(file);
}