import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allClasses")
            .then((res) => res.json())
            .then((data) => setClasses(data));
    }, []);

    const handleAddSelectClass = (item) => {
        console.log(item);
    }

    return (

        <>
            <Helmet>
                <title>Song Book | Classes</title>
            </Helmet>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">All Classes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {classes.map((classData) => (
                        <div key={classData.name} className="bg-white rounded shadow-lg p-6">
                            <img
                                src={classData.image}
                                alt={classData.name}
                                className="w-full h-64 mb-4 rounded-lg"
                            />
                            <h3 className="text-lg font-bold mb-2">{classData.name}</h3>
                            <p className="text-sm">Instructor: {classData.instructor}</p>
                            <p className="text-sm">Available Seats: {classData.availableSeats}</p>
                            <p className="text-sm">Price: ${classData.price}</p>
                            <button onClick={() => handleAddSelectClass(classData)}
                                className={`mt-4 py-2 px-4 rounded ${classData.availableSeats === 0 ? "bg-red-500 text-white cursor-not-allowed" : "bg-blue-500 text-white"
                                    }`}
                                disabled={classData.availableSeats === 0}
                            >
                                {classData.availableSeats === 0 ? "Sold Out" : "Select"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Classes;
