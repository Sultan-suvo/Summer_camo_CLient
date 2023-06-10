import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AddClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [className, setClassName] = useState("");
  const [classImage, setClassImage] = useState("");
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);
  const {user} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newClass = {
      className,
      classImage,
      instructorName: user.displayName,
      instructorEmail: user.email,
      availableSeats,
      price,
      status: "pending",
    };

    try {
      const response = await axiosSecure.post("/classes", newClass);
      console.log(response.data);
      // Handle success scenario, show success message, or redirect
    } catch (error) {
      console.error(error);
      // Handle error scenario, show error message, etc.
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="className" className="block mb-2 text-lg">Class Name:</label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="classImage" className="block mb-2 text-lg">Class Image:</label>
          <input
            type="text"
            id="classImage"
            value={classImage}
            onChange={(e) => setClassImage(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Instructor Name:</label>
          <input
            type="text"
            value='a'
            readOnly
            className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg">Instructor Email:</label>
          <input
            type="email"
            value='a'
            readOnly
            className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block mb-2 text-lg">Available Seats:</label>
          <input
            type="number"
            id="availableSeats"
            value={availableSeats}
            onChange={(e) => setAvailableSeats(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-lg">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClasses;
