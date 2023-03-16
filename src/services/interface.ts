export interface GenericResponse {
  status: string;
  message: string;
}

export interface LoginResponse {
  status: string;
  access_token: string;
}

export interface PostLogin {
  username: string;
  password: string;
}
