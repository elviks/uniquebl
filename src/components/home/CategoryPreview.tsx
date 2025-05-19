import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/section-header";
import { categoryData } from "@/data/productData";

const CategoryPreview = () => {
     return (
          <section className="section-padding bg-babyyellow-light/30">
               <div className="page-container">
                    <SectionHeader
                         title="Explore Our Products"
                         subtitle="We carefully select quality products for your little ones."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                         {categoryData.slice(0, 3).map((category) => (
                              <div
                                   key={category.id}
                                   className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
                              >
                                   <div className="relative h-48 overflow-hidden">
                                        <img
                                             src={category.image}
                                             alt={category.name}
                                             className="w-full h-full object-cover"
                                        />
                                   </div>
                                   <div className="p-5">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                             {category.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                             {category.description}
                                        </p>
                                        <Button
                                             asChild
                                             variant="outline"
                                             className="w-full"
                                        >
                                             <Link
                                                  to={`/products#${category.id}`}
                                             >
                                                  Explore{" "}
                                                  <ArrowRight className="ml-2 h-4 w-4" />
                                             </Link>
                                        </Button>
                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className="flex justify-center mt-10">
                         <Button asChild size="lg" className="bg-babypink-dark">
                              <Link to="/products">View All Categories</Link>
                         </Button>
                    </div>
               </div>
          </section>
     );
};

export default CategoryPreview;
