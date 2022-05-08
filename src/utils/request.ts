import axios from "axios";
import { FaceResponse, FileResponse } from "../types/request";

const BASE_URL = process.env['REACT_APP_BASE_URL']
const base = axios.create({
  baseURL: BASE_URL
});

export const uploadFile = (formData: FormData) => {
  return base.post<FileResponse>(`${BASE_URL}/api/files/upload`, formData);
};

export const detectFace = (formData: FormData) => {
  return base.post<FaceResponse>(`${BASE_URL}/api/detect/face`, formData);
}

export default base;