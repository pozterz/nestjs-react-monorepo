import { IAuthen } from '../../interfaces/auth.interface'

export type TAuthen = {
  userAuthen: IAuthen | null
  setUserAuthen: (data: IAuthen) => void
  setUserData: (data: IAuthen) => void
  clearAuthen: () => void
}
