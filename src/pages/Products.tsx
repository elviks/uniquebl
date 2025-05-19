
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/page-header';
import ProductCategory from '@/components/products/ProductCategory';
import { categoryData } from '@/data/productData';

const Products = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Products"
        description="Explore our wide range of quality baby products carefully selected for your little ones."
      />
      
      <div className="page-container py-10">
        {categoryData.map((category) => (
          <ProductCategory
            key={category.id}
            id={category.id}
            name={category.name}
            description={category.description}
            products={category.products}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
