import { IUser } from './user.interface'
export interface IAuth {
  email: string
  password: string
}

export interface IAuthen {
  user: IUser
  accessToken: string
}
