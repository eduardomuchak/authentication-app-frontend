export interface GenericResponse {
  status: string;
  message: string;
}

export interface LoginResponse {
  status: string;
  access_token: string;
  id: number;
}

export interface PostLogin {
  username: string;
  password: string;
}

export interface UserInfo {
  id: number;
  username: string;
  email: string;
  password: string;
  bio: string;
  photo: string;
  phone: string;
}
