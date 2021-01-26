import axios from 'axios';
import { AddressData } from '../common/models';

export const getAddress = async (zipcode: number) => {
  try {
    const response = await axios.get<AddressData>('https://api.zipaddress.net/?', { params: { zipcode: zipcode } });
    return { isSuccess: true, data: response.data, error: null };
  }
  catch (error) {
    return { isSuccess: false, data: null, error };
  }
}
