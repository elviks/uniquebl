import { Heart, ShieldCheck, BadgeCheck } from "lucide-react";
import SectionHeader from "../ui/section-header";

const values = [
     {
          id: 1,
          icon: Heart,
          title: "Personal Care",
          description:
               "As a solo shop owner, I provide personal attention to every customer who walks through our door.",
     },
     {
          id: 2,
          icon: ShieldCheck,
          title: "Quality Products",
          description:
               "Every product in our store is carefully selected to ensure quality and safety for your little ones.",
     },
     {
          id: 3,
          icon: BadgeCheck,
          title: "Trusted Service",
          description:
               "We build lasting relationships with families in our community through honest advice and reliable service.",
     },
];

const ValueProposition = () => {
     return (
          <section className="section-padding">
               <div className="page-container">
                    <SectionHeader
                         title="Why Choose Us?"
                         subtitle="We believe in providing the best for your little ones."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                         {values.map((value) => (
                              <div
                                   key={value.id}
                                   className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                              >
                                   <div className="mb-4 p-3 rounded-full bg-babypink-light/50 w-fit">
                                        <value.icon className="h-8 w-8 text-babypink-dark" />
                                   </div>
                                   <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                        {value.title}
                                   </h3>
                                   <p className="text-gray-600">
                                        {value.description}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default ValueProposition;
