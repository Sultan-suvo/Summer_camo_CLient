import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
// import logo from '../../../assets/logo.jpg';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1  lg:grid-cols-4 gap-8">
                    <div className="flex items-center">
                        {/* <img
                            className="h-12 w-12 rounded-3xl"
                            src={logo}
                            alt="Logo"
                        /> */}
                        <span className="text-white font-bold text-lg ml-2">
Supersonic Sports Cars</span>
                    </div>
                    <div className="flex flex-col md:mt-16 space-y-4">
                        <span className="text-white">Address:</span>
                        <hr className="border-white mb-4" />
                        <span className="text-gray-300">787 Mark View Street,</span>
                        <span className="text-gray-300">California, 666 444 0000</span>
                    </div>
                    <div className="flex flex-col md:mt-16 space-y-4">
                        <h2 className="text-white">Contact</h2>
                        <hr className="border-white mb-4" />
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-white text-xl" />
                            <span className="text-slate-400">787 Mark View Street, New Town, California</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-white text-xl" />
                            <span className="text-slate-400">666 444 0000</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:mt-16 space-y-4">
                        <span className="text-white">Follow Us:</span>
                        <div className="flex space-x-4">
                            <Link to='https://www.facebook.com/autolink/'><FaFacebook className="text-white text-2xl" /></Link>
                            <Link to='https://twitter.com/cars?lang=en'><FaTwitter className="text-white text-2xl" /></Link>
                            <Link to='https://www.instagram.com/rollsroycecars/?hl=en'><FaInstagram className="text-white text-2xl" /></Link>
                            <Link to='https://www.youtube.com/channel/UC3fFzCYq5devEJ8k2FRuEtQ'><FaYoutube className="text-white text-2xl" /></Link>                          
                        </div>
                    </div>
                   
                </div>
                <div className="mt-8 text-center">
                    <span className="text-gray-300">
                        &copy; {new Date().getFullYear()} Website Name. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
