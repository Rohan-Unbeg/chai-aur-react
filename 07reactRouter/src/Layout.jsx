import React from "react";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
