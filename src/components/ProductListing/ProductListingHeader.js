import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, spacing } from '../../utils/styles';

const ProductListingHeaderRoot = styled('header')`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 40em;
  padding: ${spacing.lg}px;
  text-align: center;
`;

const Title = styled('h1')`
  color: ${colors.brandDark};
  font-family: ${fonts.heading};
  font-size: 2.45rem;
  font-weight: bold;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  margin-top: ${spacing.md}px;
  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 3rem;
  }
`;

const Intro = styled('p')`
  color: ${colors.text};
  font-family: ${fonts.body};
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
  margin-top: ${spacing.md}px;

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ProductListingHeader = () => (
  <ProductListingHeaderRoot>
    <Title>Get LaunchDarkly Swag!</Title>
    <Intro>
      All of these items are made with 🖤 from LaunchDarkly and are strictly
      sold at cost — not for a profit
    </Intro>
  </ProductListingHeaderRoot>
);

export default ProductListingHeader;
