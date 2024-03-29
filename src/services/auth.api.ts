import http from '../../http_common'
const RES = 'auth'

const signin = async (data: any) => {
    try {
        const res = await http.post(`${RES}/login`, data);
        return res;
    } catch (error) {
         console.log(error);
    }
};
const signup = async (data: any) => {
    console.log(data);
    
    const res = await http.post(`${RES}/signup`, data)
    return res;

};

const AuthService = {
    signin,
    signup,
};

export default AuthService;