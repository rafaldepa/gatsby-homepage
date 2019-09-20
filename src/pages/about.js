import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const AboutPage = () => (
  <>
    <SEO title="About" />
    <h1>About me</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default AboutPage;