import { Link, useLoaderData } from "react-router-dom";
import User from "./User";
import { FaArrowRight } from "react-icons/fa";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="grid grid-cols-12">
        <div className="text-center col-span-10">
      <h1 className="text-2xl font-bold mb-4">Users: {users.length}</h1>
      <div className="flex justify-center">
        <table className="w-1/2 border border-gray-300 text-left" border="1">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">Email</th>
              <th className="p-2 border border-gray-300">Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="col-span-2">
        <Link  className=" flex  items-center font-bold bg-blue-600 px-4 py-2 rounded-full hover:bg-zinc-500" to='/'> <FaArrowRight></FaArrowRight> Home</Link>
    </div>
    </div>
  );
};

export default Users;