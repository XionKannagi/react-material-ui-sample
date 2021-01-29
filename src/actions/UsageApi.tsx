import axios from 'axios';
import CommonResponse from '../common/models/CommonResponse';
import { UsageData } from '../common/models';

export const getUsage = async () => {
  const apiURL: string = process.env.REACT_APP_API_URL===undefined? '' : process.env.REACT_APP_API_URL;

  try {
    const response = await axios.get<CommonResponse<UsageData[]>>(apiURL);
    return { isSuccess: true, data: response.data, error: null };
  }
  catch (error) {
    return { isSuccess: false, data: null, error };
  }
}
