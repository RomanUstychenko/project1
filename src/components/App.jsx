import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Navbar = lazy(() => import("components/Navbar/Navbar"));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
       <>
        <Suspense>
        <Navbar />
          <Routes>
            <Route >
              <Route index element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
              </Route>
          </Routes>
        </Suspense>
      
      </>
  );
};
