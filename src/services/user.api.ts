import http from '../../http_common'
import { IUser, IUpdatePass } from '../types';
const RES = 'user'
const PUB = 'publication'
const SK = 'skill'
const getUser =  (id: any) => {
     return http.get(`${RES}/${id}`);
    
};
const get_publication = () => {
    return http.get(`${PUB}`);
};
const create = (data: any) => {
    return http.post(`${RES}/merchant`, data);
};

const checkEmail = (data: any) => {
    return http.post(`${RES}/email`, data);
};

const update = (data: IUser) => {
    const { password, ...user } = data
    return http.patch<any>(`${RES}/${data.id}`, user);
};

const addSkill = (data: any) => {
     console.log(data);
    return http.post(`skill`, data);
};
const getSkillByUser = (userId: number) => {
    
   return http.get(`skill/user/${userId}`);
};

const removeSkillByUser = (id: number) => {
    return http.delete(`skill/${id}`);
 };
 const addExperience = (data: any) => {
    // console.log(data);
    return http.post(`${RES}/experience`, data);
};

const updatePass = (data: IUpdatePass) => {
    return http.patch<any>(`${RES}/${data.id}`, data);
}
const remove = (id: any) => {
    return http.delete<any>(`${RES}/${id}`);
};


export const UserService = {
    getUser,
    create,
    update,
    get_publication,
    addExperience,
    remove,
    updatePass,
    addSkill,
    getSkillByUser,
    removeSkillByUser,
    checkEmail
};