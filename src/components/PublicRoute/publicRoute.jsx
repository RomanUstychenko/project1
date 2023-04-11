import { Navigate, Outlet } from "react-router-dom"
import UseAuth from "components/hooks/useAuth"

export default function PublicRoute() {
    const isUserLogin = UseAuth();

    if (isUserLogin) {
        return <Navigate to="/contacts" />
    }
  return <Outlet />
}