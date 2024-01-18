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
    const res = await http.post(`${RES}/signup`, data, {
        headers: {
            'Content-Type': "multipart/form-data"
        }
    });
    console.log(res);
    
    return res;

};

const AuthService = {
    signin,
    signup,
};

export default AuthService;