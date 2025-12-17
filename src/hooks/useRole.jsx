import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useRole = () => {
  const { user, loading } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const {data} = await axiosSecure(`/users/role`)
      return data.role

    },
  })

    return { role, isRoleLoading }
}

export default useRole



// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import useAuth from "./useAuth";

// const useRole = () => {
//   const { user, loading } = useAuth();

//   const { data: role = "", isLoading } = useQuery({
//     queryKey: ["userRole", user?.email],
//     enabled: !loading && !!user?.email,
//     queryFn: async () => {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/users/role/${user.email}`
//       );
//       return res.data?.role;
//     },
//   });

//   return {
//     role,
//     roleLoading: isLoading,
//   };
// };

// export default useRole;

