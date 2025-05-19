import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
     return (
          <div className="bg-babyblue-light/30 p-6 rounded-xl">
               <h3 className="text-xl font-semibold mb-6">
                    Contact Information
               </h3>

               <div className="space-y-5">
                    <div className="flex items-start">
                         <Phone className="h-5 w-5 text-babyblue-dark mr-3 mt-1 flex-shrink-0" />
                         <div>
                              <p className="font-medium text-gray-800">Phone</p>
                              <a
                                   href="tel:+1234567890"
                                   className="text-gray-600 hover:text-babypink-dark transition-colors"
                              >
                                   9856022973
                              </a>
                         </div>
                    </div>

                    <div className="flex items-start">
                         <Mail className="h-5 w-5 text-babyblue-dark mr-3 mt-1 flex-shrink-0" />
                         <div>
                              <p className="font-medium text-gray-800">Email</p>
                              <a
                                   href="mailto:info@littletreasures.com"
                                   className="text-gray-600 hover:text-babypink-dark transition-colors"
                              >
                                   info@rnuniquebabyland.com
                              </a>
                         </div>
                    </div>

                    <div className="flex items-start">
                         <MapPin className="h-5 w-5 text-babyblue-dark mr-3 mt-1 flex-shrink-0" />
                         <div>
                              <p className="font-medium text-gray-800">
                                   Address
                              </p>
                              <address className="text-gray-600 not-italic">
                                   Pokhara-17, Birauta
                                   <br />
                                   Kaski, Nepal
                              </address>
                         </div>
                    </div>

                    <div className="flex items-start">
                         <Clock className="h-5 w-5 text-babyblue-dark mr-3 mt-1 flex-shrink-0" />
                         <div>
                              <p className="font-medium text-gray-800">
                                   Opening Hours
                              </p>
                              <p className="text-gray-600">
                                   Sunday - Friday: 7:30 AM - 7:30 PM
                                   <br />
                                   Saturday: 10:00 AM - 7:00 PM
                                   <br />
                              </p>
                         </div>
                    </div>

                    <div className="pt-2">
                         <Button asChild variant="outline" className="w-full">
                              <a
                                   href="https://wa.me/9856022973"
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <MessageCircle className="mr-2 h-4 w-4" />
                                   Chat on WhatsApp
                              </a>
                         </Button>
                    </div>
               </div>
          </div>
     );
};

export default ContactInfo;
