import { useAtom } from "jotai";
import { Navigate } from "react-router-dom";
import { tokenAtom } from "../../atoms/authAtoms";

export default function UserRoute({children}: any) {
    const [token] = useAtom(tokenAtom)

    if(!token) {
        return <Navigate to="/auth/login" replace/>
    }

    return children
}