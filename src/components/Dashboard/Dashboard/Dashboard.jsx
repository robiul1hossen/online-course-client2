import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import Navbar from "../../share/Navbar/Navbar";
import Footer from "../../share/Footer/Footer";
import useCart from "../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();

  // const [users, setUsers] = useState([]);

  const { data: alluser = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      "https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/users"
    );
    return res.json();
  });

  const loggedInUser = alluser.filter((users) => users.email === user.email);
  const isAdmin = loggedInUser[0]?.role;

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu  p-4 w-80 min-h-full bg-[#343A40] text-white">
            <li className="flex items-center ">
              <img className="w-40 rounded-full" src={user.photoURL} alt="" />
            </li>
            <li className="flex items-center">
              <p className="font-semibold text-xs hover:bg-[#fff]">
                {user.displayName}
              </p>
              <p className="hover:bg-[#fff]">{user.email}</p>
            </li>
            {isAdmin === "admin" ? (
              <>
                <li className="hover:bg-[#fff]">
                  <a>Sidebar Item 1</a>
                </li>
                <li className="hover:bg-[#fff]">
                  <a>Sidebar Item 2</a>
                </li>
                <li className="hover:bg-[#fff]">
                  <Link to="/addtocard">
                    <FaShoppingCart></FaShoppingCart>My Cart +
                    {cart?.length || 0}
                  </Link>
                </li>
                <li className="hover:bg-[#fff]">
                  <Link to="/dashboard/allusers">
                    <FaUsers></FaUsers> All Usres
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:bg-[#fff]">
                  <a>Sidebar Item 3</a>
                </li>
                <li className="hover:bg-[#fff]">
                  <a>Sidebar Item 4</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
