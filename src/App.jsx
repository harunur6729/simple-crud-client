import { Link } from "react-router-dom";
import "./App.css";
import {  FaArrowRight } from "react-icons/fa";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;

    const user = { name, email, mobile };

    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User added successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10">
        <h1 className="text-3xl font-bold">Simple CRUD</h1>

        <form className="mt-5 bg-red-200 py-12 rounded-lg" onSubmit={handleAddUser}>
          <input
            className="border px-4 mb-2"
            type="text"
            name="name"
            id=""
            placeholder="Name.."
          />
          <br />
          <input
            className="border px-4 mb-2 "
            type="email"
            name="email"
            id=""
            placeholder="Email.."
          />
          <br />
          <input className="border px-4 mb-2 " type="number" name="mobile" id="" placeholder="Mobile.."/>
          <br />
          
          <input
            className="bg-yellow-200 hover:bg-lime-500 font-bold px-3 rounded-full mt-3"
            type="submit"
            value="Add User"
          /> 
          
        </form>
      </div>
      <div className="col-span-2 ">
        <Link className=" flex items-center bg-green-500 px-4 py-2 rounded-full font-bold hover:bg-lime-300" to="/users"><FaArrowRight /> All Users</Link>
      </div>
    </div>
  );
}

export default App;
