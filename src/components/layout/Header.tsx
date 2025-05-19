import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     const closeMenu = () => {
          setIsMenuOpen(false);
     };

     const menuItems = [
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Visit Us", path: "/visit" },
          { name: "Contact", path: "/contact" },
          { name: "About", path: "/about" },
     ];

     return (
          <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
               <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-center items-center">
                         {/* <Link
                              to="/"
                              className="flex items-center space-x-2"
                              onClick={closeMenu}
                         >
                              <img
                                   src="images/uniquelogo2.png"
                                   alt="main logo"
                                   width={50}
                              />
                              <span className="font-bold text-xl md:text-xl text-gray-800">
                                   RN Unique Babyland
                              </span>
                         </Link> */}

                         {/* Desktop Navigation */}
                         <nav className="hidden md:flex space-x-6 gap-10">
                              {menuItems.map((item) => (
                                   <Link
                                        key={item.name}
                                        to={item.path}
                                        className="text-gray-600 hover:text-babypink-dark transition-colors text-xl font-bold"
                                   >
                                        {item.name}
                                   </Link>
                              ))}
                         </nav>

                         {/* Mobile Menu Button */}
                         <Button
                              variant="ghost"
                              className="md:hidden"
                              onClick={toggleMenu}
                              aria-label="Toggle Menu"
                         >
                              {isMenuOpen ? (
                                   <X className="h-6 w-6" />
                              ) : (
                                   <Menu className="h-6 w-6" />
                              )}
                         </Button>
                    </div>
               </div>

               {/* Mobile Navigation */}
               <div
                    className={cn(
                         "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
                         isMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
               >
                    <div className="flex justify-end p-4">
                         <Button
                              variant="ghost"
                              onClick={closeMenu}
                              aria-label="Close Menu"
                         >
                              <X className="h-6 w-6" />
                         </Button>
                    </div>
                    <div className="flex flex-col items-center space-y-6 p-8 pt-0">
                         {menuItems.map((item) => (
                              <Link
                                   key={item.name}
                                   to={item.path}
                                   className="text-xl font-medium text-gray-800 hover:text-babypink-dark"
                                   onClick={closeMenu}
                              >
                                   {item.name}
                              </Link>
                         ))}
                    </div>
               </div>
          </header>
     );
};

export default Header;
