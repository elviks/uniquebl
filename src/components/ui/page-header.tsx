
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
