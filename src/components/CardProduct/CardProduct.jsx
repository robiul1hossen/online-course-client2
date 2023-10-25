import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";

const CardProduct = () => {
  const [cart, refetch] = useCart();
  console.log(cart);

  const handleDelete = (cart) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/carts/${cart._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "The course you added has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      {cart.length > 0 ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Details</th>
              <th>Enroll</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((card) => (
              <tr key={card._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={card.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{card.title}</div>
                    </div>
                  </div>
                </td>
                <td>{card.instructorName}</td>
                <td>${card.price}</td>
                <td>
                  <Link to={`/courseDetails/${card.orderCourseId}`}>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </Link>
                </td>
                <td>
                  <Link>
                    <button className="btn btn-ghost btn-xs">Enroll Now</button>
                  </Link>
                </td>
                <td>
                  <Link>
                    <button
                      onClick={() => handleDelete(card)}
                      className="btn btn-ghost btn-xs text-lg">
                      <ImCross></ImCross>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="flex justify-center items-center text-2xl font-bold">
          No Course Added To The Cart Yet!
        </h2>
      )}
    </div>
  );
};

export default CardProduct;
