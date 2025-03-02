import React from "react";

const User = ({ user }) => {
  return (
    
        <tr className="odd:bg-gray-800 even:bg-gray-700 text-white">
            <td className="p-2 border border-gray-300  w-full">{user.name}</td>
            <td className="p-2 border border-gray-300  w-full"> {user.email}</td>
            <td className="p-2 border border-gray-300  w-full"> {user.mobile}</td>
        </tr>
    
  );
};

export default User;
