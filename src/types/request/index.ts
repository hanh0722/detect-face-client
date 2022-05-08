export interface BaseResponse {
  code: number;
  message: string;
};

export interface FileResponse extends BaseResponse {
  data: Array<string>
};

export interface BoundingBox {
  top_row: number;
  left_col: number;
  bottom_row: number;
  right_col: number
}

export interface FaceResponse extends BaseResponse {
  data: BoundingBox,
  url: string
}