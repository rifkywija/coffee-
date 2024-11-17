
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <div className="bg-gray-800 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Lorem Ipsum</p>
          <p>34 New City 1234, dolor sit Road 12345</p>
          <p>Call Now: 0800-123-4567</p>
          <p>Mail Now: mail@ubuntub.com</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Facebook</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam egestas nulla at amet.</p>
          <p className="text-gray-400">March 6, 2013</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Twitter</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam egestas nulla at amet.</p>
          <p className="text-gray-400">March 6, 2013</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form>
            <input
              type="text"
              placeholder="Enter your Name..."
              className="w-full p-2 mb-4 text-black"
            />
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full p-2 mb-4 text-black"
            />
            <button type="submit" className="bg-red-600 p-2 w-full text-white">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
