import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const themeColor = isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';

    return (
        <div className={`home ${themeColor}`}>
            <Helmet>
                <title>Song Book | Home</title>
            </Helmet>
            <button
                className="bg-blue-500 fixed z-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
            <Banner />
            <PopularClasses />
            <PopularInstructor />
        </div>
    );
};

export default Home;
