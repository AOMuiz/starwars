import React from "react";
import Header from "../Header";

export const Wrapper = ({ children }) => (
  <>
    <Header />
    {children}
    <footer />
  </>
);
