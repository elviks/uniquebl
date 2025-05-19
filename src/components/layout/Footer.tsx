import { Link } from "react-router-dom";
import { Phone, Home, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="bg-babyblue-light/50 py-8 mt-12">
               <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-800">
                                   RN Unique Babyland
                              </h3>
                              <p className="text-gray-600">
                                   Your local baby shop offering quality baby
                                   items at affordable prices.
                              </p>
                         </div>

                         <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-800">
                                   Quick Links
                              </h3>
                              <nav className="flex flex-col space-y-2">
                                   <Link
                                        to="/"
                                        className="text-gray-600 hover:text-babypink-dark transition-colors"
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        to="/products"
                                        className="text-gray-600 hover:text-babypink-dark transition-colors"
                                   >
                                        Products
                                   </Link>
                                   <Link
                                        to="/visit"
                                        className="text-gray-600 hover:text-babypink-dark transition-colors"
                                   >
                                        Visit Us
                                   </Link>
                                   <Link
                                        to="/contact"
                                        className="text-gray-600 hover:text-babypink-dark transition-colors"
                                   >
                                        Contact
                                   </Link>
                                   <Link
                                        to="/about"
                                        className="text-gray-600 hover:text-babypink-dark transition-colors"
                                   >
                                        About
                                   </Link>
                              </nav>
                         </div>

                         <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-800">
                                   Contact Info
                              </h3>
                              <div className="space-y-2">
                                   <div className="flex items-center space-x-2">
                                        <Phone className="h-5 w-5 text-babypink-dark" />
                                        <a
                                             href="tel:+1234567890"
                                             className="text-gray-600 hover:text-babypink-dark transition-colors"
                                        >
                                             9856022973
                                        </a>
                                   </div>
                                   <div className="flex items-center space-x-2">
                                        <Mail className="h-5 w-5 text-babypink-dark" />
                                        <a
                                             href="mailto:info@littletreasures.com"
                                             className="text-gray-600 hover:text-babypink-dark transition-colors"
                                        >
                                             info@rnuniquebabyland.com
                                        </a>
                                   </div>
                                   <div className="flex items-center space-x-2">
                                        <Home className="h-5 w-5 text-babypink-dark" />
                                        <span className="text-gray-600">
                                             Pokhara-17, Birauta
                                        </span>
                                   </div>
                                   <div className="flex items-center space-x-4 pt-2">
                                        <a
                                             href="#"
                                             aria-label="Instagram"
                                             className="text-gray-600 hover:text-babypink-dark transition-colors"
                                        >
                                             <Instagram className="h-5 w-5" />
                                        </a>
                                        <a
                                             href="https://www.facebook.com/biraura/"
                                             aria-label="Facebook"
                                             target="_blank"
                                             className="text-gray-600 hover:text-babypink-dark transition-colors"
                                        >
                                             <Facebook className="h-5 w-5" />
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
                         <p>
                              &copy; {currentYear} RN Unique Babyland All rights
                              reserved.
                         </p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
