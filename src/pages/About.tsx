import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/page-header";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
     return (
          <Layout>
               <PageHeader
                    title="About RN Unique Babyland"
                    description="Learn more about our shop and our commitment to customers."
               />

               <div className="page-container py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                         <div>
                              <img
                                   src="images/person2.jpg"
                                   alt="Shop owner with baby products"
                                   className="rounded-lg shadow-md"
                              />
                         </div>

                         <div>
                              <SectionHeader
                                   title="Proprieter"
                                   alignment="left"
                              />

                              <div className="prose text-gray-700">
                                   <p className="mb-4">
                                        Hello! I'm Narayan Sharma Marshaini, the
                                        proud owner of RN Unique babyland.
                                   </p>

                                   <p className="mb-4">
                                        Our shop was opened with a simple
                                        mission: to provide parents with
                                        carefully selected baby products that
                                        are safe, high-quality, and affordable.
                                   </p>

                                   <p>
                                        Every product in our store is chosen
                                        with care, keeping in mind the needs of
                                        both kids and parents. I believe in
                                        building lasting relationships with the
                                        families who visit us.
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className="mt-16">
                         <SectionHeader
                              title="Our Values"
                              subtitle="At RN Unique Babyland, we believe in making a difference in our community through these core values:"
                         />

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                              <div className="bg-babypeach-light p-6 rounded-lg">
                                   <h3 className="text-xl font-semibold mb-3">
                                        Quality & Safety
                                   </h3>
                                   <p className="text-gray-700">
                                        We carefully select products that meet
                                        the highest safety standards. Your kid's
                                        well-being is our top priority.
                                   </p>
                              </div>

                              <div className="bg-babygreen-light p-6 rounded-lg">
                                   <h3 className="text-xl font-semibold mb-3">
                                        Personal Attention
                                   </h3>
                                   <p className="text-gray-700">
                                        I provide individualized service to help
                                        you find the perfect products for your
                                        family's needs.
                                   </p>
                              </div>

                              <div className="bg-babyblue-light p-6 rounded-lg">
                                   <h3 className="text-xl font-semibold mb-3">
                                        Community Focus
                                   </h3>
                                   <p className="text-gray-700">
                                        We're proud to be a local business
                                        serving local families, building
                                        relationships that go beyond
                                        transactions.
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className="mt-12 text-center">
                         <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                              Thank you for supporting our business. We look
                              forward to helping you find the perfect items for
                              your little kids!
                         </p>

                         <Button
                              asChild
                              size="lg"
                              className="bg-babypink hover:bg-babypink-dark"
                         >
                              <Link to="/contact">Get in Touch</Link>
                         </Button>
                    </div>
               </div>
          </Layout>
     );
};

export default About;
