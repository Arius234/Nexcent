import React from "react";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/app/assets/logo/white-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="w-full md:w-1/4">
            <div className="flex items-center mb-4">
              <Image src={Logo} alt="Nexcent Logo" width={120} height={50} />
            </div>
            <p className="text-sm text-white">
              &copy; 2020 Nexcent Ltd. <br />
              All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Dribbble</span>
                <FaDribbble size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Contact us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Help center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Terms of service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Legal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Privacy policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-500">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-white font-semibold mb-4">Stay up to date</h4>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600"
                >
                  →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
