import { useAtom } from "jotai";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { tokenAtom, userAtom } from "../../atoms/authAtoms";
import { setUserDatas } from "../../utils/auth";

export default function LogoutRoute() {
    const [token] = useAtom(tokenAtom)
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            localStorage.removeItem("token")
            setUserDatas(null, null)
            navigate("/")
        }
    }, [])

    return (
        <div>
            çıkış yapılıyor...
        </div>
    )

}