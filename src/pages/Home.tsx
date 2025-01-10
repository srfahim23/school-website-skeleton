import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <Slider {...sliderSettings}>
          <div>
            <img 
              src="https://placehold.co/1200x400" 
              alt="School Building" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <img 
              src="https://placehold.co/1200x400" 
              alt="Students" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Welcome Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome to Our School</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            We are committed to providing quality education and nurturing the leaders of tomorrow.
            Our school offers a comprehensive curriculum that focuses on academic excellence,
            character development, and extracurricular activities.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-gray-600">
                Our curriculum is designed to challenge and inspire students to reach their full potential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Skilled Teachers</h3>
              <p className="text-gray-600">
                Our experienced faculty is dedicated to providing the best education for your children.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art facilities to support learning and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News & Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Annual Sports Day</h3>
              <p className="text-gray-600">Join us for our annual sports day celebration...</p>
            </div>
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Science Fair 2024</h3>
              <p className="text-gray-600">Students showcase their innovative projects...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;