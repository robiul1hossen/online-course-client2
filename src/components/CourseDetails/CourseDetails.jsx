import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./CourseDetails.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const [courseData, setCourseData] = useState([]);
  console.log(courseData);
  const { id } = useParams();
  const [, refetch] = useCart();

  useEffect(() => {
    fetch(
      `https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/courseDetails/${id}`
    )
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, [id]);

  const {
    img,
    desc,
    instructorName,
    title,
    price,
    rating,
    schedule,
    syllabus,
    total_assignment,
    assignment_duration,
    certificate,
    rewards,
    _id,
  } = courseData;

  const handleAddToCart = () => {
    if (user && user?.email) {
      const orderCourse = {
        orderCourseId: _id,
        email: user.email,
        img,
        desc,
        instructorName,
        title,
        price,
        rating,
        schedule,
        syllabus,
        total_assignment,
        assignment_duration,
        certificate,
        rewards,
      };
      fetch(
        "https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/carts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderCourse),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img className="w-full h-[410px]" src={img} alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-3xl">{title}</h1>
          <p className="font-bold text-2xl my-6">
            ${price} <sub className="font-normal">only</sub>{" "}
          </p>
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}></Rating>
          <span className="ml-2">({rating} rating)</span>
          <h3 className="font-bold mt-6">Member Ship</h3>
          <div className="flex gap-5 mb-6 mt-3">
            <div className="membership">3 Month</div>
            <div className="membership">6 Month</div>
            <div className="membership">1 Year</div>
            <div className="membership">Life Time</div>
          </div>
          <div>
            <button
              onClick={() => handleAddToCart(courseData)}
              className="w-full btn text-white hover:text-black hover:bg-white hover:border-black bg-red-600 my-5">
              Add to card
            </button>
          </div>
          <div className="w-full">
            <button className="btn btn-outline w-full">Enroll Now</button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <img
          className="w-40"
          src="https://i.ibb.co/6XsP283/html-css.jpg"
          alt=""
        />
        <img
          className="w-40"
          src="https://i.ibb.co/gZ2LDpg/programming-script-text-coding-word-1.jpg"
          alt=""
        />
        <img
          className="w-40"
          src="https://i.ibb.co/V2zPdFm/programming-script-text-coding-word.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Description
            </div>
            <div className="collapse-content">
              <p>{desc}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Specifications
            </div>
            <div className="collapse-content">
              <h1 className="font-bold">Instructor: {instructorName}</h1>
              <p className="font-semibold">
                <span className="font-bold">Schedule:</span> {schedule}
              </p>
              <p className="font-semibold">
                <span className="font-bold">syllabus:</span> {syllabus}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Total Assignment:</span>{" "}
                {total_assignment}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Assignment Duration:</span>{" "}
                {assignment_duration}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Certificate:</span> {certificate}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Rewards:</span> {rewards}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
