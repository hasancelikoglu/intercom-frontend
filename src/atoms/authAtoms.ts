import {atom} from 'jotai'

interface User {
    name?: string;
    email?: string;
    user?: boolean;
}

export const strengthAtom = atom(0)

export const userAtom = atom<User>({user: false})