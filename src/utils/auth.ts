import { getDefaultStore } from "jotai";
import { tokenAtom, userAtom } from "../atoms/authAtoms";

const defaultStore = getDefaultStore()

export const setToken = (token: string) => {
    defaultStore.set(tokenAtom, token)
}