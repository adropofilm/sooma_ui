import React from "react";
import { ReactElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppContainer = (): ReactElement => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};
