import {Routes, Route } from "react-router-dom";
import React,{ lazy, Suspense } from "react";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "redux/auth/auth-operation";
import PrivateRoute from "components/PrivateRoute/privateRoute";
import PublicRoute from "components/PublicRoute/publicRoute";
import { getLoadingUserStatus } from "redux/auth/auth-selector";
import {  allUsers } from "redux/user/user-operation";
import { Wrapper } from "./App.styled";

const MenuItems = lazy(() => import("Pages/MenuItems/MenuItems"));
const MenuItemsDetails = lazy(() => import("components/MenuItemsDetails/MenuItemsDetails"));
const Users = lazy(() => import("Pages/Users/Users"));
const NotFound = lazy(() => import("Pages/PageNotFound/NotFound"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));
const Login = lazy(() => import("Pages/Login/Login"));
const Registration = lazy(() => import("Pages/Registration/Registration"));
const LivePage = lazy(() => import("Pages/LivePage/LivePage"))
const ModalRegisterVerify = lazy(() => import("Pages/ModalRegisterVerify/ModalRegisterVerify"))
const About = lazy(() => import("Pages/About/About"))

export default function App() {

const dispatch = useDispatch();
const isLoadingUser = useSelector(getLoadingUserStatus)

useEffect(() => {
  dispatch(current())
  dispatch(allUsers())
}, [dispatch])

  return (
    <Wrapper
      style={{
        // height: '100vh',
        // fontSize: 40,
        color: '#010101'
      }}
    >
      {isLoadingUser ?  <Loader/> : 
      (
      <Suspense fallback={<Loader/>}>
        <Navbar />
      <Routes>
      
        <Route element={<PublicRoute />}>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Registration />}/>
          <Route path="/register/verify" element={<ModalRegisterVerify />}/>
          
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MenuItems />}/>
          <Route path="/items/" element={<MenuItems />}>
            <Route path="/items/:category" element={<MenuItemsDetails />}/>
          </Route>
          <Route path="/users" element={<Users />}/>
        </Route>
        {/* <Route path="/live/" element={<LivePage />}/> */}
        <Route path="/live/:owner" element={<LivePage />}/>
     <Route path="*" element={<NotFound />}/>
     </Routes>
     </Suspense>
      )      }
      
    </Wrapper>
  )
};
