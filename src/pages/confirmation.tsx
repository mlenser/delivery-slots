import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ConfirmationPage from '../containers/ConfirmationPage';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Confirmation" />
    <ConfirmationPage />
  </Layout>
);

export default IndexPage;
