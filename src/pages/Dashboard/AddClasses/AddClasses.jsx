
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth()

  const onSubmit = async (data) => {
    // Prepare the class object to be added to the database
    const newClass = {
      className: data.className,
      classImage: data.classImage,
      instructorName: user.displayName,
      instructorEmail: user.email,
      availableSeats: data.availableSeats,
      price: parseFloat(data.price),
      status: "pending",
    };

    try {
      const response = await fetch("http://localhost:5000/addClasses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClass),
      });

      if (response.ok) {
        console.log("Class added successfully");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `New class added!!`,
          showConfirmButton: false,
          timer: 1500
      })
        reset(); // Reset the form fields
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="w-2/3">
      <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="className" className="block font-bold mb-2">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            {...register("className", { required: true })}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="classImage" className="block font-bold mb-2">
            Class Image
          </label>
          <input
            type="text"
            id="classImage"
            {...register("classImage", { required: true })}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorName" className="block font-bold mb-2">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            value={user?.displayName || ""} 
            disabled
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block font-bold mb-2">
            Instructor Email
          </label>
          <input
            type="text"
            id="instructorEmail"
            value={user?.email}
            disabled
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block font-bold mb-2">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            {...register("availableSeats", { required: true })}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true })}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;
