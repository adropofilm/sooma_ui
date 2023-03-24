import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";

export const Root = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
