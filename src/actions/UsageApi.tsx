import axios from 'axios';
import { UsageData } from '../common/models';


export const getUsage = async () => {
  try {
    const response = await axios.get<UsageData[]>('http://localhost:3001/api/usage');
    return { isSuccess: true, data: response.data, error: null };
  }
  catch (error) {
    return { isSuccess: false, data: null, error };
  }
}
