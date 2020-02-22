import axios from 'axios';

const baseUrl = '/rest-api/v1.0/dict';

export interface IDictValues {
  [key: string]: string;
}

export interface IDictResponse {
  key: string;
  values: IDictValues;
}

export const getAllDicts = () => axios.get<IDictResponse[]>(`${baseUrl}/all`);
