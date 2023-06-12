import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import person2 from '../../../assets/person 2.png';
import person3 from '../../../assets/person 3.png';

const Feedback = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Set the duration of animations
      once: true,
      mirror: false, // Disable mirroring of animations on scroll
      easing: 'ease-in-out' // Only animate elements once
    });
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
            <div className="text-gray-500 mb-4">John Doe, CEO of Sports Car Company</div>
            <div className="text-gray-800 text-xl font-bold mb-4">
              The Song Book website has been a game-changer for me as a musician. The vast collection of songs and the intuitive user interface have made it incredibly easy for me to find and learn new songs. Thank you for creating such an amazing platform!
            </div>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="https://source.unsplash.com/100x100/?portrait" alt="Customer avatar" />
              <div>
                <div className="font-bold text-gray-800">Mary Smith</div>
                <div className="text-gray-500 text-sm">Marketing Manager, Sports Car Company</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="text-gray-500 mb-4">Jane Doe, Engineer at Sports Car Company</div>
            <div className="text-gray-800 text-xl font-bold mb-4">
              As a music enthusiast, Song Book has become my go-to platform for discovering and exploring new songs across various genres. The curated playlists and recommendations have introduced me to some incredible artists and tracks. Keep up the great work!
            </div>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={person2} alt="Customer avatar" />
              <div>
                <div className="font-bold text-gray-800">Bob Johnson</div>
                <div className="text-gray-500 text-sm">CTO, Sports Car Company</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="400">
            <div className="text-gray-500 mb-4">Jim Smith, Racing Enthusiast</div>
            <div className="text-gray-800 text-xl font-bold mb-4">
              Song Book has been an invaluable tool for my songwriting process. The chord charts, lyrics, and songwriting resources have helped me refine my craft and explore new musical ideas. Thank you for creating such a comprehensive platform for musicians like me!
            </div>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={person3} alt="Customer avatar" />
              <div>
                <div className="font-bold text-gray-800">Lisa Rodriguez</div>
                <div className="text-gray-500 text-sm">Sports Car Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
