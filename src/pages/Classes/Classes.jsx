import { useEffect, useState } from "react";
import axios from "axios";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/classes");
      const classesData = response.data;
      setClasses(classesData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classItem) => (
        <div
          key={classItem._id}
          className={`rounded-lg p-4 shadow ${
            classItem.availableSeats <= 0 ? "bg-red-300" : "bg-white"
          }`}
        >
          <img src={classItem.classImage} alt="Class Image" className="mb-4" />
          <h2 className="text-xl font-bold mb-2">{classItem.name}</h2>
          <p className="mb-2">Instructor: {classItem.instructorName}</p>
          <p className="mb-2">Available Seats: {classItem.availableSeats}</p>
          <p className="mb-4">Price: {classItem.price}</p>

          {classItem.availableSeats > 0 && !isAdmin && !isInstructor ? (
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Select
            </button>
          ) : (
            <button className="bg-gray-500 cursor-not-allowed text-white px-4 py-2 rounded-lg" disabled>
              Not Available
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Classes;
