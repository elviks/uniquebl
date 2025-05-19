
import Hero from '@/components/home/Hero';
import CategoryPreview from '@/components/home/CategoryPreview';
import ValueProposition from '@/components/home/ValueProposition';
import ContactCTA from '@/components/home/ContactCTA';
import Layout from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategoryPreview />
      <ValueProposition />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
