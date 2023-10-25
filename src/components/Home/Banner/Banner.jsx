import React from "react";
import "./Banner.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <div className="h-[100vh] mb-20 w-full banner">
        <h1>
          {" "}
          "Unlock Your Code to Success: Master Programming with Us!"
          <br />
          <br />
          "Code Your Dreams into Reality: Start Programming Today!"
          <br />
          <br />
          "Elevate Your Skills: Learn Programming the Smart Way!"
          <br />
          <br />
          "Unleash Your Potential: Code, Create, Conquer!"
          <br />
          <br />
        </h1>
        <h2 className="btn btn-warning">Explore More</h2>
      </div>
      <div className="mb-20 md:flex justify-between text-center ">
        <div className="h-36 w-72 bg-green-800 flex cursor-pointer justify-center gap-8 mb-8 items-center">
          <FaBuilding className="text-6xl text-white"></FaBuilding>
          <p className="text-white flex flex-col font-bold text-2xl">
            <span>2007</span>
            <span>Est.</span>
          </p>
        </div>

        <div className="h-36 w-72 bg-green-800 flex cursor-pointer justify-center gap-8 mb-8 items-center">
          <FaChalkboardTeacher className="text-6xl text-white"></FaChalkboardTeacher>
          <p className="text-white flex flex-col font-bold text-2xl">
            <span>47</span>
            <span>Instructor</span>
          </p>
        </div>

        <div className="h-36 w-72 bg-green-800 flex cursor-pointer justify-center gap-8 mb-8 items-center">
          <FaGraduationCap className="text-6xl text-white"></FaGraduationCap>
          <p className="text-white flex flex-col font-bold text-2xl">
            <span>1000+</span>
            <span>Students</span>
          </p>
        </div>
        <div className="h-36 w-72 bg-green-800 flex cursor-pointer justify-center gap-8 mb-8 items-center">
          <FaPeopleGroup className="text-6xl text-white"></FaPeopleGroup>
          <p className="text-white flex flex-col font-bold text-2xl">
            <span>07</span>
            <span>Admins</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
