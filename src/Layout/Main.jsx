import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useState } from "react";
import { motion } from 'framer-motion'

const Main = () => {
    const [move, setMove] = useState(false)
    return (
        <div>
            <motion.div
                animate={{ y: move ? 20 : -5 }}
                transition={{ type: "tween", duration: 2 }}
                onClick={() => {
                    setMove(!move)
                }}
            >
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </motion.div>
        </div>
    );
};

export default Main;