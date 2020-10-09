import React from 'react';
import { graphql } from 'gatsby';
import Index from '../containers/IndexPage';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

type Props = {
  location?: {
    pathname: string;
  };
};

const IndexPage: React.FC<Props> = ({ data, location }) => (
  <Layout location={location}>
    <SEO title={data.site.siteMetadata.title} />
    <Index
      description={data.site.siteMetadata.description}
      title={data.site.siteMetadata.title}
    />
  </Layout>
);

export const query = graphql`
  query {
    site: site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;
