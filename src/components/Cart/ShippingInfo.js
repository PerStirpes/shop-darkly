import React, { Component } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { MdKeyboardArrowDown, MdInfo } from 'react-icons/md';

import { colors, radius, spacing, fonts } from '../../utils/styles';

const ShippingInfoRoot = styled('div')`
  background: #f5f5f5;
  border-radius: ${radius.default}px;
  margin: ${spacing.sm}px 0;
  padding: ${spacing.sm}px ${spacing.md}px;
`;

const Intro = styled('p')`
  color: ${colors.text};
  cursor: pointer;
  display: block;
  font-family: ${fonts.body};
  font-size: 0.95rem;
  margin: 0;
  position: relative;
  text-align: left;
`;

const on = keyframes`
  to {
    opacity: 1;
  }
`;

const Details = styled(Intro)`
  animation: ${on} 1s ease forwards;
  cursor: default;
  display: none;
  margin-top: ${spacing.xs}px;
  opacity: 0;
  transition: 0.5s;

  .expanded & {
    display: block;
  }
`;

const ArrowIcon = styled(MdKeyboardArrowDown)`
  color: ${colors.lilac};
  height: 26px;
  position: relative;
  stroke-width: 1px;
  transform: translateY(-10%) rotate(0);
  transition: 0.5s;
  vertical-align: top;
  width: 26px;

  .expanded & {
    transform: translateY(-10%) rotate(180deg);
  }

  ${Intro}:hover & {
    color: ${colors.accent};
  }
`;

const InfoIcon = styled(MdInfo)`
  color: ${colors.lilac};
  margin-right: ${spacing['2xs']}px;
  vertical-align: middle;
`;

class ShippingInfo extends Component {
  state = {
    detailsVisible: false,
  };

  toggle = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ detailsVisible: !this.state.detailsVisible });
  };

  render() {
    const { detailsVisible } = this.state;

    return (
      <ShippingInfoRoot className={detailsVisible ? 'expanded' : ''}>
        <Intro role="button" onClick={this.toggle}>
          <InfoIcon />
          International shipments can take <strong>6 weeks or more</strong> to
          be delivered. <ArrowIcon />
        </Intro>
        <Details>
          Tracking updates may not always show up in real time on your tracking
          link. If you still have not received your order at the end of 6 weeks,
          please let us know by sending an email to{' '}
          <a href="mailto:support@LaunchDarkly.com">support@LaunchDarkly.com</a>
        </Details>
      </ShippingInfoRoot>
    );
  }
}

export default ShippingInfo;
