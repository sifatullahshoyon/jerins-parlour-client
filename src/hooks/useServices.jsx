import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useServices = () => {
    const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: services = [], refetch , isPending , isError } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
        if (!user?.email) return [];
      const res = await axiosSecure.get("/services");
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isPending) <div>loading.....</div>

  if( isError) console.error("Error loading")

 
  return [services, refetch , isPending];
};

export default useServices;




