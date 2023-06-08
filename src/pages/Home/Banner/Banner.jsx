import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpeg';

const Banner = () => {
    return (
        <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            stopOnHover={false}
        >
            <div className="relative">
                <img src={banner1} alt="Banner 1" className="w-full h-auto object-cover" style={{ maxHeight: '70vh' }} />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                    <div className="text-white text-center">
                        <h2 className="text-4xl md:text-7xl font-bold">Discover the Joy of Music</h2>
                        <p className="text-lg md:text-2xl mt-4">Unlock your passion and creativity through music education.</p>
                        <button className="btn btn-primary mt-8">Explore Now</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={banner2} alt="Banner 2" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                    <div className="text-white text-center">
                        <h2 className="text-4xl md:text-7xl font-bold">Unleash Your Musical Potential</h2>
                        <p className="text-lg md:text-2xl mt-4">Join our music school and embark on a transformative musical journey.</p>
                        <button className="btn btn-primary mt-8">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={banner3} alt="Banner 3" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                    <div className="text-white text-center">
                        <h2 className="text-4xl md:text-7xl font-bold">Experience the Magic of Music</h2>
                        <p className="text-lg md:text-2xl mt-4">Immerse yourself in the enchanting world of melodies and harmonies.</p>
                        <button className="btn btn-primary mt-8">Learn More</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;
