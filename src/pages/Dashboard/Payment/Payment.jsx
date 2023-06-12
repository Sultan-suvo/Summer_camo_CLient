import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckOut from "./CheckOut";
// import useSelectedClass from "../../../hooks/useSelectedClass";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

  const location = useLocation()
  const stateValue = location.state;
  console.log(stateValue);
  const Cartprice = parseFloat(stateValue.price)

  return (
    <div className="w-2/3">
      <h2 className="text-3xl font-bold text-center mb-10">
        Make Your payment Done !
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOut price={Cartprice} items={stateValue}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;