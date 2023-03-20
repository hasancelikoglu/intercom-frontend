import { useAtom } from "jotai";
import { Navigate } from "react-router-dom";
import { tokenAtom } from "../../atoms/authAtoms";

export default function AuthRoute({children}: any) {
    const [token] = useAtom(tokenAtom)
    console.log(token)

    if(token) {
        return <Navigate to="/" />
    }

    return children
}