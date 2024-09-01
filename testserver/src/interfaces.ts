export interface IUser {
    userName: string;
    email: string;
    password:string
  }

  export type createUser = {
    status: number;
    message: string;
    user?: IUser; // Optional field, as it might not be present in error responses
    token?:TokenResponse
  };

  export type userHashDetails ={
    name?:string,
    type?:number,
    permission?:number

  }

  export interface TokenResponse {
    accessToken: string;
    refreshToken: string;
  }