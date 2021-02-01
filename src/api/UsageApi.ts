import { getRequest } from '../api/RequestApi'
import { UsageData } from '../common/models';

const baseUrl: string =  process.env.REACT_APP_API_URL===undefined? '' : process.env.REACT_APP_API_URL

export const getUsageData = async () => {
  const url: string = baseUrl + '/usage';

  try {
    const response = await getRequest<UsageData[]>(url);
    return { isSuccess: true, data: response.data, error: null };
  }
  catch (error) {
    return { isSuccess: false, data: null, error };
  }
}
