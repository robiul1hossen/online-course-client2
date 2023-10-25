import Navbar from "../share/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../share/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
