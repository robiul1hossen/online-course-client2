import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Main/Main.jsx";
import Home from "./components/Home/Home/Home.jsx";
import CourseDetails from "./components/CourseDetails/CourseDetails.jsx";
import Login from "./components/Login/Login.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LaunchCourse from "./components/LaunchCourse/LaunchCourse";
import CardProduct from "./components/CardProduct/CardProduct";
import AllUsers from "./components/Dashboard/AllUsers/AllUsers";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/courseDetails/:id",
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
        // loader: ({params})=>fetch(`https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/courseDetails/${params.id}`)
      },
      {
        path: "/launchCourse",
        element: <LaunchCourse></LaunchCourse>,
      },
      {
        path: "/addtocard",
        element: (
          <PrivateRoute>
            <CardProduct></CardProduct>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
