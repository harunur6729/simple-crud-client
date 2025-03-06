import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log({ name, email });
    const updatedUser = { name, email };
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("updated successfully");
        }
       
      });
  };
  return (
    <div className=" grid grid-cols-12">
      <div className=" col-span-2">
        <Link to='/'  className="flex justify-center items-center bg-fuchsia-400 rounded-full font-semibold">
         
          <FaArrowLeft></FaArrowLeft> <button> Home</button>
        </Link>
      </div>
      

      <div className="col-span-8">
        <h3 className="text-2xl font-semibold">
          Update information of {loadedUser.name}
        </h3>
        <form onSubmit={handleUpdate} className="mt-8 space-y-3">
          <input
            className="bg-gray-200 px-4 rounded-lg border border-gray-300 mb-2"
            type="text"
            name="name"
            defaultValue={loadedUser?.name}
            id=""
          />
          <br />
          <input
            className="bg-gray-200 px-4 rounded-lg border border-gray-300 "
            type="email"
            name="email"
            defaultValue={loadedUser?.email}
            id=""
          />
          <br />
         
          <input
            className="bg-green-200 px-4 rounded-lg border border-gray-300"
            type="submit"
            value="Update"
          />
          
        </form>
      </div>
      <div className="col-span-2">
        <Link to='/users' className="flex justify-center items-center  bg-fuchsia-400 rounded-full font-semibold">
         
          <FaArrowLeft></FaArrowLeft> <button> All Users</button>
        </Link>
      </div>
    </div>
  );
};

export default Update;
