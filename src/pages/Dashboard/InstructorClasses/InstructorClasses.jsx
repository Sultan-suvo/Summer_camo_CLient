import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const InstructorClasses = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useAuth();
    console.log(user);

    useEffect(() => {
        const fetchInstructorClasses = async () => {
            try {
                const token = localStorage.getItem('access-token');
                if (!token) {
                    console.log('Access token not found in localStorage');
                    return;
                }

                const response = await fetch('https://assignment12-server-nu.vercel.app/instructor/classes', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setClasses(data);
                } else {
                    console.log('Failed to fetch instructor classes:', response.status);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchInstructorClasses();
    }, []);
    console.log(classes);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Classes Added by Instructor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classes.map((classItem) => (
                    <div key={classItem._id} className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">{classItem.className}</h3>
                        <p className="mb-2">Status: {classItem.status}</p>
                        <p className="mb-2">Total Enrolled Students: {classItem.totalEnrolledStudents}</p>
                        <div className='flex'>
                            <p className="mb-2 me-2">Feedback:</p>
                            {Array.isArray(classItem.feedback) ? (
                                classItem.feedback.map((feedbackItem, index) => (
                                    <p key={index} className="mb-2">{feedbackItem}</p>
                                ))
                            ) : (
                                <p className="mb-2">no feedback</p>
                            )}
                        </div>
                        <Link to='/dashboard/addClasses'>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Update
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructorClasses;