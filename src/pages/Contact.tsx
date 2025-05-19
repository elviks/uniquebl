
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/page-header';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        description="Have questions or inquiries? Get in touch with us today."
      />
      
      <div className="page-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
