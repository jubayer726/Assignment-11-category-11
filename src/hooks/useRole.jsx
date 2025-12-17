// import { useQuery } from '@tanstack/react-query'
// import useAuth from './useAuth'
// import axios from 'axios'

// const useRole = () => {
//   const { user, loading } = useAuth()

//   const { data: role, isLoading: isRoleLoading } = useQuery({
//     enabled: !loading && !!user?.email,
//     queryKey: ['role', user?.email],
//     queryFn: async () => {
//       const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/user/role/${user?.email}`)
//     //    const res = await axios.get(`${import.meta.env.VITE_API_URL}/available-tutors`);
//       return data.role
//     },
//   })

//   //   return { role, isRoleLoading }
//   return [role, isRoleLoading]
// }

// export default useRole

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loading } = useAuth();

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/role/${user.email}`
      );
      return res.data?.role;
    },
  });

  return {
    role,
    roleLoading: isLoading,
  };
};

export default useRole;

