import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 text-gray-700 flex flex-col items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Company</h3>
          <ul className="mt-2 space-y-2">
            <li>Overview</li>
            <li>Core Values</li>
            <li>Culture</li>
            <li>ESG</li>
            <li>Transparency</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">Products/Services</h3>
          <ul className="mt-2 space-y-2">
            <li>Development Services</li>
            <li>Social Media Services</li>
            <li>Business Growth Services</li>
            <li>Education Enhancement Services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">Opportunities</h3>
          <ul className="mt-2 space-y-2">
            <li>Sales Partnership</li>
            <li>Developer Partnership</li>
            <li>Trainee Registration Form</li>
            <li>Jobs Portal</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">Support</h3>
          <ul className="mt-2 space-y-2">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Refund Policy</li>
            <li>Site Map</li>
            <li>Payment Guide for Customers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">Company Address</h3>
          <ul className="mt-2 space-y-3">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt className="text-gray-900" />
              <span>Find us</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhoneAlt className="text-gray-900" />
              <span>(051) 2758408</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope className="text-gray-900" />
              <span>sales@thevista.one</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
