import { Login } from "../pages/Login";

import { Routes, Route, useLocation, Outlet } from "react-router-dom";

import { Register } from "../pages/Register";
import { ErrorPage } from "./error";
import { RequireAuth } from "./RequireAuth";
import { PersonalInfo } from "../pages/PersonalInfo";

export function MainRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Outlet />}>
        {/* public routes */}
        <Route index path="/" element={<Login />} />
        <Route index path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/user" element={<PersonalInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
