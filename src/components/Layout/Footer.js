import React from 'react';
import styled from '@emotion/styled';

import { breakpoints, colors, spacing, fonts } from '../../utils/styles';

const FooterRoot = styled('footer')`
  font-family: ${fonts.body};
  align-items: center;
  color: ${colors.textMild};
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  padding: ${spacing.md}px;
  padding-bottom: calc(${spacing.xl}px + 50px);

  a {
    color: ${colors.brand};
  }

  @media (min-width: ${breakpoints.desktop}px) {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 50px;
    padding: 0 ${spacing.xl}px 10px;
  }
`;

const Row = styled('span')`
  display: inline-block;
  flex-shrink: 0;
  line-height: 1.3;
  padding-bottom: ${spacing['2xs']}px;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}px) {
    line-height: 1.4;
    padding-bottom: 0;
  }
`;

const Spacer = styled('span')`
  display: none;

  @media (min-width: ${breakpoints.desktop}px) {
    display: inline-block;
    padding: 0 ${spacing.sm}px;
  }
`;

const Footer = () => (
  <FooterRoot>
    <Row>
      <b>Got questions?&nbsp;</b>
    </Row>
    <Row>
      Talk to us on Twitter{' '}
      <a href="https://twitter.com/launchdarkly">@launchdarkly</a>
    </Row>
    <Row>
      &nbsp;or send an email to{' '}
      <a href="mailto:support@launchdarkly.com">team@launchdarkly.com</a>
    </Row>
    <Spacer>•</Spacer>
    <Row>
      Forked and Re-Built with 🚩 by the{' '}
      <a href="https://www.launchdarkly.com/">LaunchDarkly Team</a>
    </Row>
    <Spacer>•</Spacer>
    <Row>
      See the original source code on{' '}
      <a href="https://github.com/LaunchDarkly/store.LaunchDarkly.com">
        GitHub
      </a>
    </Row>
  </FooterRoot>
);

export default Footer;
