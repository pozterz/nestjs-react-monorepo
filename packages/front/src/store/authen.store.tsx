import create from 'zustand'
import { getStoreData, setStoreData, removeStore } from '../utils/session'
import { AUTH_STORAGE_NAME } from '../constants/_environment'

import { TAuthen } from './types/authen.type'

import { IAuthen } from '../interfaces/auth.interface'

enum STORENAME {
  userAuthen = 'u',
}

export const AuthenStore = create<TAuthen>((set, get) => ({
  userAuthen: getStoreData(STORENAME.userAuthen) as IAuthen | null,
  setUserAuthen: (data: IAuthen) => {
    setStoreData(STORENAME.userAuthen, data)
    setStoreData(AUTH_STORAGE_NAME, data.accessToken)
    set({ userAuthen: data })
  },
  setUserData: (data: IAuthen) => {
    const d = getStoreData(STORENAME.userAuthen)
    d.user = data
    setStoreData(STORENAME.userAuthen, d)
    set({ userAuthen: d })
  },
  clearAuthen: () => {
    removeStore(STORENAME.userAuthen)
    removeStore(AUTH_STORAGE_NAME)
    set({ userAuthen: null })
  },
}))
