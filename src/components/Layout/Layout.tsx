import React from "react";
import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = (): ReactElement => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};
