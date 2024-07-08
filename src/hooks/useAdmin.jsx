import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    error,
    data: isAdmin,
    isPending: isAdminLoading,
  } = useQuery({
    // queryKey: [  'isAdmin', user?.email],
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data?.admin;
    },
    // enabled: !loading
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
