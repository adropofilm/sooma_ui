import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../Layout";

export const Root = (): ReactElement => {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
};
