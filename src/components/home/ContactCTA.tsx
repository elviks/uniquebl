import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const ContactCTA = () => {
     return (
          <section className="section-padding baby-gradient">
               <div className="page-container">
                    <div className="flex flex-col items-center text-center">
                         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                              Want to Learn More?
                         </h2>
                         <p className="text-lg text-gray-700 max-w-2xl mb-8">
                              Visit our shop today or get in touch with us for
                              any queries about our products and services.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4">
                              <Button
                                   asChild
                                   size="lg"
                                   className="bg-babypink-dark hover:bg-babypink-dark/90"
                              >
                                   <Link to="/contact">
                                        <Phone className="mr-2 h-5 w-5" />{" "}
                                        Contact Us
                                   </Link>
                              </Button>
                              <Button asChild variant="outline" size="lg">
                                   <Link to="/visit">
                                        <MapPin className="mr-2 h-5 w-5" /> Find
                                        Our Shop
                                   </Link>
                              </Button>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default ContactCTA;
