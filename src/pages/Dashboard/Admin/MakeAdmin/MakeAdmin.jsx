import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Title from '../../../../components/Title';
import PrimaryBtn from '../../../../components/Button/PrimaryBtn';
import { AuthContext } from '../../../../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Loader from '../../../../components/Shared/Loader/Loader';
import { FaTrashAlt } from 'react-icons/fa';


const MakeAdmin = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

      const isLoading = false;
      const axiosSecure = useAxiosSecure();
      const {data : users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
      });
    return (
        <div>
            <Title title='All Users'/>
            <div className='flex flex-row flex-wrap justify-between items-center p-4'>
                <p className='font-Poppins font-semibold text-xl text-text-dark'>Make Admin</p>
                <p className='font-Poppins font-semibold text-xl text-text-dark'>{user?.displayName}</p>
            </div>
            {/* Content Part */}
            <div className='min-h-screen bg-[#F4F7FC] w-full p-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
                <div className="flex flex-row flex-wrap items-center gap-2">
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="email" className='text-base text-text-color font-bold font-Poppins'>Email</label>
                <input {...register(user?.displayName)} id='email' className="rounded-lg bg-white sm:w-2/3 md:w-[570px] px-2 py-3 text-text-gray focus:outline-none" type="text" placeholder='jon@gamil.com '  required />
                </div>
                <div className='mt-8'>
                    <PrimaryBtn width="w-[108px] ">Submit</PrimaryBtn>
                </div>
                </div>
            </form>
            {/* End Form Part */}
            <div>
                <h4 className='text-lg md:text-xl lg:text-2xl text-text-dark font-Poppins font-bold mt-10 mb-5'>Total Users : {users?.length ? users?.length : 0}</h4>
                <div className="overflow-x-auto">
            <table className="min-w-[90%] border border-gray-100 my-6">
              <thead>
                <tr className="bg-[#f86da0] text-white">
                  <th className="py-4 px-6 text-lg text-left border-b">#</th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Product Image
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    {users?.displayName}
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Price
                  </th>
                  <th className="py-4 px-6 text-lg border-b text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <Loader />
                ) : (
                  users?.map((item, index) => (
                    <tr
                      key={item._id}
                      className="hover:bg-gray-50 border-b transition duration-300"
                    >
                      <td className="py-4 px-4 mx-auto">{index + 1}</td>
                      <td className="py-4 px-4 flex">
                        <img
                          src={
                            item?.img_link ? item?.img_link : "Img Not Found"
                          }
                          alt="item img"
                          className="h-16 w-16 object-cover "
                        />
                      </td>
                      <td className="py-4 px-6 border-b text-xl font-medium">
                        {item?.displayName ? item?.displayName : "Data Not Found"}
                      </td>
                      <td className="py-4 px-6 border-b text-lg font-medium">
                        ${item?.price ? item?.price : 0}
                      </td>
                      <td className="py-4 px-6 border-b text-end">
                        <button
                          onClick={() => handleItemDelete(item?._id)}
                          className="bg-rose-500  scale-100 transition-all duration-100 text-white p-3 rounded-full"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
            </div>
            </div>
        </div>
    );
};

export default MakeAdmin;