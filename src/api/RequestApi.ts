import axios, { AxiosRequestConfig } from 'axios';
import { CommonResponse } from '../common/models'

export const getRequest = async <T>(url: string, config?: AxiosRequestConfig) => {
  
  try {
    const res = await axios.get<CommonResponse<T>>(url, config);
    return { isSuccess: true, data: res.data, error: null };
  }
  catch (error) {
    return { isSuccess: false, data: null, error };
  }
}

