import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Baby, ShoppingBag } from "lucide-react";

const Hero = () => {
     return (
          <section className="relative py-16 md:py-24 overflow-hidden">
               <div className="absolute inset-0 baby-gradient opacity-20"></div>
               <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                         <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                              <div className="mb-6 inline-block animate-wiggle">
                                   <img
                                        src="images/uniquelogo.png"
                                        alt="main logo"
                                        width={120}
                                   />
                              </div>
                              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                                   Welcome to our shop
                              </h1>
                              <p className="text-xl text-gray-700 mb-8">
                                   Your one-stop shop for all things baby.
                                   Quality products, exceptional service, and
                                   affordable prices.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                   <Button
                                        asChild
                                        size="lg"
                                        className="bg-babypink-dark hover:bg-babypink-dark/90"
                                   >
                                        <Link to="/visit">
                                             <ShoppingBag className="mr-2 h-5 w-5" />{" "}
                                             Visit Us Today
                                        </Link>
                                   </Button>
                                   <Button asChild variant="outline" size="lg">
                                        <Link to="/products">
                                             View Our Products
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                         <div className="md:w-1/2 flex justify-center">
                              <div className="relative">
                                   <div className="absolute -inset-4 rounded-full bg-babypink-light/50 blur-xl"></div>
                                   <img
                                        src="https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        alt="Baby with toys"
                                        className="rounded-xl shadow-lg relative z-10 max-w-full h-auto"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;
