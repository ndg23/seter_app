import { createContext } from "react";
const initState={
    message:'',
    error:'',
    load:'',
    signin:true,
    token:'',
}
export const AuthContext = createContext();
export const UserContext = createContext();
export const SignupContext = createContext();