import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("https://assignment12-server-nu.vercel.app/instructor")
            .then((res) => res.json())
            .then((data) => setInstructors(data));
    }, []);

    // Sort the instructors based on the number of students (optional)
    const sortedInstructors = instructors.sort((a, b) => b.studentsCount - a.studentsCount);

    // Get the top 6 instructors (optional)
    const topInstructors = sortedInstructors.slice(0, 6);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-4xl font-bold text-center mb-4">Popular Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topInstructors.map((instructor) => (
                    <div key={instructor.name} className="bg-white rounded-lg shadow-md p-4">
                        <img
                            src={instructor.profileImage}
                            alt={instructor.name}
                            className="w-full h-72 object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-lg font-bold">{instructor.name}</h3>
                        <p className="text-gray-500 mb-2">{instructor.classTitle}</p>
                        <p className="text-gray-500 mb-2">{instructor.studentsCount} Students</p>
                        <div className="flex items-center">
                            <span className="text-yellow-500 me-2">{instructor.rating}</span>
                            <Rating
                                style={{ maxWidth: 80 }}
                                value={data.rating}
                                readOnly
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructor;
