import axios from 'axios';

const baseUrl = '/rest-api/v1.0/account';

export interface IUserResponse {
  id: number;
  name: string;
}

export const login = () => axios.post<IUserResponse>(`${baseUrl}`);

export const logout = () => axios.delete(`${baseUrl}`);
