import { Link } from "react-router-dom";


const User = ({ user,setUsers ,users}) => {
  
  
  const handleDelete = _id =>{
    console.log('delete' , _id);
    fetch(`http://localhost:5000/users/${_id}`,{
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
      if(data.deletedCount>0){
        alert('deleted successfully');
        const remaining = users.filter(user => user._id !== _id);
        setUsers(remaining)
      }
    })

  }
  return (
    <tr className="odd:bg-gray-800 even:bg-gray-700 text-white">
      
      <td className="p-2 border border-gray-300  w-full">{user.name}</td>
      <td className="p-2 border border-gray-300  w-full"> {user.email}</td>
      <td className="p-2 border border-gray-300  w-full"> {user.mobile}</td>

      <td  className="p-2 border border-gray-300  w-full">
      <Link className="bg-blue-300 mx-2 px-2 rounded-lg " to={`/update/${user._id}`}>
        <button >Update</button>
        </Link>
      </td>

      <td>
        <button onClick={() =>handleDelete(user._id)} className="bg-red-300 mx-2 px-2 rounded-lg "> Delete</button>
      </td>
    </tr>
  );
};

export default User;
