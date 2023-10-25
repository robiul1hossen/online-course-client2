import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const LaunchCourse = () => {
  const { user } = useContext(AuthContext);

  const haldleLaunchCourse = (event) => {
    event.preventDefault();

    const form = event.target;
    const instructorName = form.instructorName.value;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const schedule = form.schedule.value;
    const syllabus = form.syllabus.value;
    const total_assignment = form.total_assignment.value;
    const certificate = form.certificate.value;
    const rewards = form.rewards.value;
    const img = form.img.value;
    const desc = form.full_dsecription.value;

    const launchCourse = {
      instructorName,
      title,
      description,
      price,
      rating,
      schedule,
      syllabus,
      total_assignment,
      certificate,
      rewards,
      img,
      full_dsecription: desc,
    };

    fetch(
      "https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/launchCourse",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(launchCourse),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Course Launched Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <form onSubmit={haldleLaunchCourse} className="bg-base-200 rounded-md">
      <div className="grid grid-cols-4 gap-x-8 p-5" action="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">instructorName</span>
          </label>
          <input
            type="text"
            placeholder="instructorName"
            id="instructorName"
            defaultValue={user?.displayName}
            readOnly
            name="instructorName"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">title</span>
          </label>
          <input
            type="text"
            placeholder="title"
            id="title"
            name="title"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            id="description"
            name="description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            id="price"
            name="price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">rating</span>
          </label>
          <input
            type="text"
            placeholder="rating"
            id="rating"
            name="rating"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">schedule</span>
          </label>
          <input
            type="text"
            placeholder="schedule"
            id="schedule"
            name="schedule"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">syllabus</span>
          </label>
          <input
            type="text"
            placeholder="syllabus"
            id="syllabus"
            name="syllabus"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">total_assignment</span>
          </label>
          <input
            type="text"
            placeholder="total_assignment"
            id="total_assignment"
            name="total_assignment"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">assignment_duration</span>
          </label>
          <input
            type="text"
            placeholder="assignment_duration"
            id="assignment_duration"
            name="assignment_duration"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">certificate</span>
          </label>
          <input
            type="text"
            placeholder="certificate"
            id="certificate"
            name="certificate"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">rewards</span>
          </label>
          <input
            type="text"
            placeholder="rewards"
            id="rewards"
            name="rewards"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">img</span>
          </label>
          <input
            type="text"
            placeholder="img"
            id="img"
            name="img"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="form-control p-5 mt-0">
        <label className="label">
          <span className="label-text">Full Dsecription</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          name="full_dsecription"
          placeholder="Full Dsecription"></textarea>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Launch</button>
      </div>
    </form>
  );
};

export default LaunchCourse;
