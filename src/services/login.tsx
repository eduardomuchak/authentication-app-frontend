import { api } from '../lib/axios';
import { PostLogin } from './interface';

export const postLogin = async (payload: PostLogin) => {
  const response = await api.post('/auth/login', payload);
  return response.data;
};
