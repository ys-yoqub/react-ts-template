import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
