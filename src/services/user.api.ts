import http from '../../http_common';
import { IUser, IUpdatePass } from '../types';

const API_BASE = '/api';
const RES = 'user';
const PUB = 'publication';
const SK = 'skill';

const createEndpoint = (resource: string, subResource?: string) => {
  return subResource ? `${API_BASE}/${resource}/${subResource}` : `${API_BASE}/${resource}`;
};

const getUser = async (id: any) => {
  try {
    const response = await http.get(createEndpoint(RES, id));
    return response.data;
  } catch (error) {
    // Handle error
    console.error('getUser error:', error);
    throw error;
  }
};

const getPublication = async () => {
  try {
    const response = await http.get(createEndpoint(PUB));
    return response.data;
  } catch (error) {
    console.error('getPublication error:', error);
    throw error;
  }
};

const create = async (data: any) => {
  try {
    const response = await http.post(createEndpoint(RES, 'merchant'), data);
    return response.data;
  } catch (error) {
    console.error('create error:', error);
    throw error;
  }
};
const updatePass = (data: IUpdatePass) => {
    return http.patch<any>(`${RES}/${data.id}`, data);
}

const checkEmail = (data: any) => {
    return http.post(`${RES}/email`, data);
};

// ... Other functions follow the same pattern

export const UserService = {
  getUser,
  create,
  getPublication,
  checkEmail,
};
