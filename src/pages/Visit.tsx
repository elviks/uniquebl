import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/page-header";
import SectionHeader from "@/components/ui/section-header";
import { MapPin, Clock, Car } from "lucide-react";

const Visit = () => {
     return (
          <Layout>
               <PageHeader
                    title="Visit Our Shop"
                    description="Come see our products in person and get personalized assistance."
               />

               <div className="page-container py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                         <div>
                              <SectionHeader
                                   title="Store Location"
                                   alignment="left"
                              />

                              <div className="space-y-6">
                                   <div className="flex items-start">
                                        <MapPin className="h-5 w-5 text-babypink-dark mr-3 mt-1" />
                                        <div>
                                             <h3 className="font-medium text-lg">
                                                  Address
                                             </h3>
                                             <address className="text-gray-600 not-italic">
                                                  Pokhara-17, Birauta
                                                  <br />
                                                  Kaski, Nepal
                                             </address>
                                        </div>
                                   </div>

                                   <div className="flex items-start">
                                        <Clock className="h-5 w-5 text-babypink-dark mr-3 mt-1" />
                                        <div>
                                             <h3 className="font-medium text-lg">
                                                  Opening Hours
                                             </h3>
                                             <ul className="text-gray-600 space-y-1">
                                                  <li>
                                                       Sunday - Friday: 7:30 AM
                                                       - 7:30 PM
                                                  </li>
                                                  <li>
                                                       Saturday: 10:00 AM - 7:00
                                                       PM
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="flex items-start">
                                        <Car className="h-5 w-5 text-babypink-dark mr-3 mt-1" />
                                        <div>
                                             <h3 className="font-medium text-lg">
                                                  Parking
                                             </h3>
                                             <p className="text-gray-600">
                                                  Free parking available in
                                                  front of the shop.
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              <div className="mt-8">
                                   <SectionHeader
                                        title="Nearby Landmarks"
                                        alignment="left"
                                   />
                                   <ul className="list-disc list-inside text-gray-600">
                                        <li>Below NIC Asia Bank</li>
                                        <li>Near Ram Mandir </li>
                                        <li>
                                             1-minute walk from Birauta Chowk
                                        </li>
                                   </ul>
                              </div>
                         </div>

                         <div>
                              <SectionHeader
                                   title="Find Us on the Map"
                                   alignment="left"
                              />
                              <div className="rounded-lg overflow-hidden shadow-md h-[400px] md:h-[500px]">
                                   <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d219.78202552252583!2d83.97049932768844!3d28.191740605167766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1747628719479!5m2!1sen!2snp  "
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Store Location Map"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </Layout>
     );
};

export default Visit;
