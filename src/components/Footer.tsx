import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">About Us</h3>
              <p className="text-gray-300 mb-4">
                Our school is committed to providing quality education and nurturing the leaders of tomorrow
                through comprehensive academic programs and character development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
                <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
                <a href="#" className="hover:text-blue-300"><FaYoutube /></a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link to="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Notice Board</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaPhone className="mr-3" />
                  <span>+880 1617026858</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3" />
                  <span>srfahim23.com</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-3" />
                  <span>Dhangora , Sirajganj, Bangladesh</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">School Hours</h3>
              <ul className="space-y-3">
                <li>Sunday - Thursday</li>
                <li>8:00 AM - 4:00 PM</li>
                <li>Friday - Saturday</li>
                <li>Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-950 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <p>&copy; {new Date().getFullYear()} School Name. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Developed with ❤️ by FAHIM FAYSAL</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;