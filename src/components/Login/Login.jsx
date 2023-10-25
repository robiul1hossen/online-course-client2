import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../share/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [check, setCheck] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handleCheck = (event) => {
    setCheck(event.target.checked);
    setPasswordType(event.target.checked ? "text" : "password");
  };
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const savedUser = { email: email, name: name, role: "student" };
      fetch(
        "https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  id="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="email"
                  id="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordType}
                  required
                  placeholder="password"
                  id="password"
                  className="input input-bordered"
                />
                <div className="flex justify-between">
                  <label className="label">
                    <a href="#" className=" label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label className="label">
                    <input
                      onChange={handleCheck}
                      type="checkbox"
                      name="checkbox"
                      checked={check}
                      className="checkbox"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex justify-between p-4">
              <span>
                {" "}
                Don't have an accoutn? <Link to={"/signup"}>
                  Sign Up Now
                </Link>{" "}
              </span>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
