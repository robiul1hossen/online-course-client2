// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";

// // const queryClient = new QueryClient();

// const useCart = () => {
//   const { user } = useContext(AuthContext);

//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["cart", user?.email],
//     queryFn: async () => {
//       const response = await fetch(
//         `https://online-courses-server-51g6cq47f-robiul1hossen.vercel.app/carts?email=${user.email}`
//       );
//       return response.json();
//     },
//   });
//   return [cart, refetch];
// };
// export default useCart;

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      if (!user || !user.email) {
        return { data: [] };
      }
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
