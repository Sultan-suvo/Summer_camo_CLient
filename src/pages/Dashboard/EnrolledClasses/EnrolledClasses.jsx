import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const EnrolledClasses = () => {
  const { user } = useAuth(); // Retrieve user information from useAuth hook
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    if (user) {
      const email = user.email; // Access the email from the user object
      const accessToken = localStorage.getItem("access-token"); // Retrieve the access token from local storage

      axios.get(`http://localhost:5000/paymenthistory/${email}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the bearer token in the request headers
        },
      })
        .then((response) => {
          setPaymentHistory(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Enrolled Classes</h2>
    <p className="mb-4">Total Enrollments: {paymentHistory.length}</p>

    <div className="grid grid-cols-1 gap-4">
      {paymentHistory.map((payment) => (
        <div
          key={payment._id}
          className="border border-gray-200 rounded p-4 flex items-center"
        >
          <img
            src={payment.image}
            alt="Class Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <p className="font-bold">{payment.className}</p>
            <p className="text-gray-600">{payment.InstructorName}</p>
            <p className="text-gray-600">Email: {payment.email}</p>
            <p className="text-gray-600">Transaction ID: {payment.transectionId}</p>
            {/* Add more fields to display as needed */}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default EnrolledClasses;
