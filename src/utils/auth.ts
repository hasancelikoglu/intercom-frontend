import { getDefaultStore } from "jotai";
import { toast } from "react-hot-toast";
import { tokenAtom, User, userAtom } from "../atoms/authAtoms";
import { login, register } from "../services/auth";
import { getUser } from "../services/user";

const defaultStore = getDefaultStore()

export const setToken = (token: string) => {
    defaultStore.set(tokenAtom, token)
}

export const setUserDatas = (token: string | null, user: User | null) => {
    defaultStore.set(tokenAtom, token)
    defaultStore.set(userAtom, user)
}