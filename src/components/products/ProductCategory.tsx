
import { useState } from 'react';
import { Product } from '@/data/productData';
import SectionHeader from '../ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCategoryProps {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

const ProductCategory = ({ id, name, description, products }: ProductCategoryProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id={id} className="py-10 scroll-mt-20">
      <SectionHeader title={name} subtitle={description} alignment="left" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
