import { Navigate, Outlet } from "react-router-dom"
import UseAuth from "components/hooks/useAuth"

export default function PrivateRoute() {
    const isUserLogin = UseAuth();

    if (!isUserLogin) {
        return <Navigate to="/login" />
    }
  return <Outlet />
}
