import { api } from "../lib/axios";
import { UserInfo } from "./interface";

export const fetchPersonalInfo = async (id: number = 0): Promise<UserInfo> => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};
