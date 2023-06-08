
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpeg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" alt="Banner 1" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 p-20 md:pl-24 md:w-2/3">
            <h2 className="text-4xl md:text-7xl font-bold">Discover the Joy of Music</h2>
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Unlock your passion and creativity through music education.
            </p>
            <div>
              <button className="btn btn-primary mr-5">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" alt="Banner 2" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 p-20 md:pl-24 md:w-2/3">
            <h2 className="text-4xl md:text-7xl font-bold">Unleash Your Musical Potential</h2>
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Join our music school and embark on a transformative musical journey.
            </p>
            <div>
              <button className="btn btn-primary mr-5">Get Started</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" alt="Banner 3" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 p-20 md:pl-24 md:w-2/3">
            <h2 className="text-4xl md:text-7xl font-bold">Experience the Magic of Music</h2>
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Immerse yourself in the enchanting world of melodies and harmonies.
            </p>
            <div>
              <button className="btn btn-primary mr-5">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
