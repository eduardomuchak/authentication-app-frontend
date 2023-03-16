import { api } from '../lib/axios';
import { LoginResponse, PostLogin } from './interface';

export const postLogin = async (payload: PostLogin) => {
  const { data } = await api.post<LoginResponse>('/auth/login', payload);
  return data;
};
