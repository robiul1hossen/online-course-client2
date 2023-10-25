import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineLaunch } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import useCart from "../../hooks/useCart";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="relative">
      <div className="navbar bg-base-100 sticky top-0 z-30">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Moye Moye</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Instructior</Link>
            </li>

            {user ? (
              <>
                <details className="dropdown">
                  <summary className="m-1 btn border-none btn_img_bg">
                    <img
                      className="h-12 w-12 rounded-full leading-12"
                      src={user?.photoURL}
                      alt=""
                    />
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48 left-[-120px]">
                    <li>
                      <Link to="/dashboard">
                        <LuLayoutDashboard></LuLayoutDashboard> Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/launchCourse">
                        <MdOutlineLaunch></MdOutlineLaunch> Launch Course
                      </Link>
                    </li>
                    <li>
                      <Link to="/addtocard">
                        {" "}
                        <FaShoppingCart></FaShoppingCart> My Cart | +
                        {cart?.length || 0}
                      </Link>
                    </li>
                    <li onClick={handleLogOut}>
                      <Link to="/login">
                        <FiLogOut></FiLogOut> Logout
                      </Link>
                    </li>
                  </ul>
                </details>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>
                    <button className="btn btn-ghost">Login</button>{" "}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
