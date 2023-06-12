import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageClasses = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/addClasses')
      .then(response => response.json())
      .then(data => setClasses(data))
      .catch(error => console.error(error));
  }, []);

  const handleApprove = (classId) => {
    // Retrieve access token from localStorage
    const accessToken = localStorage.getItem('access-token');

    fetch(`http://localhost:5000/addClasses/${classId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Update the class status in the local state
          setClasses(prevClasses => {
            return prevClasses.map(cls => {
              if (cls._id === classId) {
                return { ...cls, status: 'approved' };
              }
              return cls;
            });
          });

          // Display SweetAlert success message
          Swal.fire('Success', 'Class approved!', 'success');
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error(error));
  };

  const handleDeny = (classId) => {
    const accessToken = localStorage.getItem('access-token');

    fetch(`http://localhost:5000/addClasses/${classId}/deny`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setClasses(prevClasses => {
            return prevClasses.map(cls => {
              if (cls._id === classId) {
                return { ...cls, status: 'denied' };
              }
              return cls;
            });
          });
          // Display SweetAlert success message
          Swal.fire('Success', 'Class denied!', 'success');
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error(error));
  };





  return (
    <div className="container mx-auto">
      {classes.map(cls => (
        <div key={cls._id} className="bg-white shadow-md rounded p-4 my-4">
          <div className="flex items-center justify-between mb-2">
            <img src={cls.classImage} alt={cls.title} className="w-24 h-24 rounded" />
            <h2 className="text-2xl font-bold">{cls.title}</h2>
          </div>
          <p className="mb-2">Instructor: {cls.instructorName}</p>
          <p className="mb-2">Instructor Email: {cls.instructorEmail}</p>
          <p className="mb-2">Available Seats: {cls.availableSeats}</p>
          <p className="mb-2">Price: {cls.price}</p>
          <p className="mb-4">Status: {cls.status}</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleApprove(cls._id)}
              disabled={cls.status !== 'pending'}
              className="btn btn-primary"
            >
              Approve
            </button>
            <button
              onClick={() => handleDeny(cls._id)}
              disabled={cls.status !== 'pending'}
              className="btn btn-primary"
            >
              Deny
            </button>

            {cls.status === "denied" && (
              <Link
                state={cls}
                to={"/dashboard/feedback"}
                className=" w-full btn btn-sm font-bold"
              >
                FeedBack
              </Link>
            )}
            {/* <button
              
              className="btn btn-secondary"
            >
              Send Feedback
            </button> */}
          </div>
        </div>
      ))}

    </div>
  );
};

export default ManageClasses;
