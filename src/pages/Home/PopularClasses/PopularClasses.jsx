import axios from "axios";
import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

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
  }

  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Popular Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {classes
          .sort((a, b) => b.students - a.students)
          .slice(0, 6)
          .map((classData) => (
            <div key={classData.id} className="bg-white text-slate-500 rounded shadow-lg p-6">
              <img src={classData.classImage} alt={classData.title} className="w-full h-64 mb-4 rounded-lg" />
              <h3 className="text-lg font-bold mb-2">{classData.className}</h3>
              <p className="text-sm">Instructor: {classData.instructorName}</p>
              <p className="text-sm">availableSeats: {classData.availableSeats}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularClasses;
