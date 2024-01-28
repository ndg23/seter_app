import http from '../../http_common'
const RES = 'travel'

const create = async (data: any) => {
    try {
        const res = await http.post(`${RES}/login`, data);
        return res;
    } catch (error) {
         console.log(error);
    }
};

const getTravels = async () => {
    try {
        const res = await http.get(`${RES}/`);
        return res;
    } catch (error) {
         console.log(error);
    }
};
const signup = async (data: any) => {
    const res = await http.post(`${RES}/signup`, data, {
        headers: {
            'Content-Type': "multipart/form-data"
        }
    });
    console.log(res);
    return res;

};
const getTravel = (user:string) => {
    return http.get(`${RES}`);
};
const TicketService = {
    signup,
    getTravel
};

export default TicketService;