import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ConfirmationPage from '../features/ConfirmationPage';
import H1 from '../components/Headings/H1';

const Confirmation: React.FC = () => (
  <Layout>
    <SEO title="Confirmation" />
    <H1>Confirmation</H1>
    <ConfirmationPage />
  </Layout>
);

export default Confirmation;
