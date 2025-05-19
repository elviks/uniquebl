interface SectionHeaderProps {
     title: string;
     subtitle?: string;
     alignment?: "left" | "center" | "right";
}

const SectionHeader = ({
     title,
     subtitle,
     alignment = "center",
}: SectionHeaderProps) => {
     const alignmentClasses = {
          left: "text-left",
          center: "text-center mx-auto",
          right: "text-right ml-auto",
     };

     return (
          <div className={`mb-8 ${alignmentClasses[alignment]}`}>
               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {title}
               </h2>
               {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
     );
};

export default SectionHeader;
