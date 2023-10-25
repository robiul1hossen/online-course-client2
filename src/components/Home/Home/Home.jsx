import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Banner from "../Banner/Banner";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/courses"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <Banner></Banner>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-10 ">
        {courses.map((course) => (
          <div key={course._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-[350px]" src={course.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>

              <p>{course.description}</p>
              <p>Instructor Name : {course.instructorName}</p>
              <p>Price : ${course.price}</p>
              <div className="flex justify-between items-center">
                <div className="text-2xl">
                  <FaRegHeart></FaRegHeart>
                </div>
                <div>
                  <Rating
                    placeholderRating={course.rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    readonly
                    placeholderSymbol={
                      <FaStar className="text-warning"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}></Rating>
                </div>
                <div>
                  <Link to={`/courseDetails/${course._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
