import axios from 'axios';

const baseUrl = '/rest-api/v1.0/unit';

export interface IUnitResponse {
  id: number;
  title: string;
}

export const getAllUnits = () => axios.get<IUnitResponse[]>(`${baseUrl}/all`);

export const getUnitById = (id: number) => axios.get<IUnitResponse>(`${baseUrl}/${id}`);
