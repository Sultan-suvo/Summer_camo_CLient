import { useEffect, useState } from "react";

const Innstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allinstructors")
            .then((res) => res.json())
            .then((data) => setInstructors(data));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
            {instructors.map((instructor) => (
                <div key={instructor.name} className="bg-white rounded shadow-lg p-6 rounded-lg">
                    <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-64 mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
                    <p className="text-sm">{instructor.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Innstructor;
