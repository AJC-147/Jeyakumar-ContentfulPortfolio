import React from 'react';
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import FixedScrolling from '../components/fixed-scrolling';
import HoverName from '../components/hover-name';

const IndexPage = () => (
  <Layout>
    <FixedScrolling/ >
  </Layout>
);

export default IndexPage;
