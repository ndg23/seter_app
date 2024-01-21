export interface IFeed {
    title: string;
}

export interface IPublication {
    title: string;
    date: Date;
}
export interface IUser {
    fullname: string;
    email: string;
    phone: string;
    password?:string;
    id?:string;
    role: string;
}

export interface IToken {
    role: string;
    id: string;
    email: string;
    firstname: string;
    lastname: string;

}
export interface IUpdatePass{
    password:string;
    oldpass:string;
    id:string;
}
export interface IQuery {
    country: string;
    publications: string;
    fonction: string;
}

export interface IUserState{
    isLoading: boolean,
  isAuthenticated: boolean,
  displayName: string,
  email: string,
  phoneNumber: string,
  authId: string,
  competence: string[],
  token: string,

}
export interface ILoginState{
    token:string;
    isLogged: boolean,
    isLoading: boolean,
    message: string,
}