import { useState } from "react";
import { AxiosResponse } from 'axios';
import { BaseResponse } from "../types/request";
import { isFunction } from "../utils/types";

interface UseCallApiProps<T = any, P = {}> {
  onSuccess?: (data: T) => void;
  onError?: (err: string) => void;
  request: (params?: P) => Promise<AxiosResponse<T>> | undefined
}

const useCallApi = <T extends BaseResponse, P = any>(props: UseCallApiProps<T, P>) => {
  const { request, onError, onSuccess } = props;
  const [isLoading, setIsLoading] = useState(false);
  
  const onSendRequest = async (params?: P) => {
    setIsLoading(true);
    try{
      const response = await request(params);
      if (!response) {
        return;
      }
      if (response.status >= 400 || response.data.code >= 400) {
        const message = response?.data?.message|| 'Server Internal Error';
        throw new Error(message);
      }
      setIsLoading(false);
      if (isFunction(onSuccess)) {
        onSuccess(response.data);
      }
    }catch(err: any){
      setIsLoading(false);
      if (isFunction(onError)) {
        onError(err?.message)
      }
    }
  };
  return {
    isLoading,
    onSendRequest
  }
};

export default useCallApi;