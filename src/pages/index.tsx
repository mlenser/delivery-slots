import React from 'react';
import { graphql } from 'gatsby';
import DateSelectorPage from '../containers/date-selector/DateSelectorPage';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location?: {
    pathname: string;
  };
};

const IndexPage: React.FC<Props> = ({ data, location }) => (
  <Layout location={location}>
    <SEO title={data.site.siteMetadata.title} />
    <DateSelectorPage title={data.site.siteMetadata.title} />
  </Layout>
);

export const query = graphql`
  query {
    site: site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
