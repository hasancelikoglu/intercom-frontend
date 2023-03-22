import { getDefaultStore } from "jotai";
import { tokenAtom, User, userAtom } from "../atoms/authAtoms";

const defaultStore = getDefaultStore()

export const setToken = (token: string) => {
    defaultStore.set(tokenAtom, token)
}

export const setUserDatas = (token: string, user: User) => {
    defaultStore.set(tokenAtom, token)
    defaultStore.set(userAtom, user)
}