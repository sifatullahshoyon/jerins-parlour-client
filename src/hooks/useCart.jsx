import React, { useContext } from 'react';
import Loader from '../components/Shared/Loader/Loader';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../providers/AuthProviders';


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const { isPending, error, data : cart = [] } = useQuery({
        queryKey: ['cart' , user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
          },
      })
    
      if (isPending) return <Loader />;
    
      if (error) return console.error(error.message || error);

    return [cart];
};

export default useCart;