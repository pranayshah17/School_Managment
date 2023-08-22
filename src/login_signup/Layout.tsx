import React from "react";
import { useLocation } from "react-router";
import Header from "../Slices/Components/HeaderComponent";
import Sidebar from "../Slices/Components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  user: any; // Replace 'any' with the actual type of 'user' prop
  menuItems: any[]; // Replace 'any[]' with the actual type of 'menuItems' prop
}

const Layout: React.FC<LayoutProps> = ({ children, user, menuItems }) => {
  const location = useLocation();

  const isLoginPage = location.pathname.startsWith("/login");
  const isRegistrationPage = location.pathname.startsWith("/registrationpage");

  return (
    <div>
      {!isLoginPage && !isRegistrationPage && (
        <>
          <Header user={user} menuItems={menuItems} />
          <Sidebar menuItems={menuItems} />
        </>
      )}
      {children}
    </div>
  );
};

export default Layout;
