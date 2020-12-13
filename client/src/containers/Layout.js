import * as React from "react";
import { Header, Footer } from "../components/molecules";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;