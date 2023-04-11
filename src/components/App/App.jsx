import {Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "redux/auth/auth-operation";
import PrivateRoute from "components/PrivateRoute/privateRoute";
import PublicRoute from "components/PublicRoute/publicRoute";
import { getLoadingUserStatus } from "redux/auth/auth-selector";

const Contacts = lazy(() => import("Pages/Contacts/Contacts"));
const NotFound = lazy(() => import("Pages/PageNotFound/NotFound"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));
const Login = lazy(() => import("Pages/Login/Login"));
const Registration = lazy(() => import("Pages/Registration/Registration"));


export default function App() {

const dispatch = useDispatch();
const isLoadingUser = useSelector(getLoadingUserStatus)

useEffect(() => {
  dispatch(current())
}, [dispatch])

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {isLoadingUser ?  <Loader/> : 
      (
      <Suspense fallback={<Loader/>}>
        <Navbar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Registration />}/>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Contacts />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Route>
     <Route path="*" element={<NotFound />}/>
     </Routes>
     </Suspense>
      )      }
      
    </div>
  )
};
