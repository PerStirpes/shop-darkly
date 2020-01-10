import { breakpoints, fonts, colors, dimensions, spacing } from '../../utils/styles';
import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Logo from './Logo';


const HeaderRoot = styled('header')`
  align-items: center;
  background-color: ${colors.lightest};
  border-bottom: 1px solid ${colors.brandLight};
  box-sizing: border-box;
  display: ${props => (props.isCovered ? 'none' : 'flex')};
  height: ${dimensions.headerHeight};
  justify-content: space-between;
  left: 0;
  padding-left: ${spacing.md}px;
  padding-right: ${spacing['3xl']}px;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 1000;

  @media (min-width: ${breakpoints.desktop}px) {
    &.covered {
      display: none;
    }
  }
`;

const HomeLink = styled(Link)`
  display: block;
  flex-shrink: 0;
  line-height: 1;
  margin-right: auto;
`;

// Fix this route
const AllMerchandiseLink = styled(Link)`
  display: block;
  color: ${colors.brandDark};
  font-family: ${fonts.body};
  font-size: 1rem;
  text-decoration: none; 
  flex-shrink: 0;
  line-height: 1;
  font-size: 1.1rem;
  line-height: 1.6;
`;

class Header extends Component {
  state = {
    className: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.isDesktopViewport) {
      const imageBrowserStatusChanged =
        this.props.productImagesBrowserStatus !==
        prevProps.productImagesBrowserStatus;

      if (imageBrowserStatusChanged) {
        if (this.props.productImagesBrowserStatus === 'open') {
          setTimeout(() => {
            this.setState({
              className: 'covered',
            });
          }, 500);
        } else {
          this.setState({
            className: '',
          });
        }
      }
    }
  }

  render() {
    const { className } = this.state;

    return (
      <HeaderRoot className={className}>
        <HomeLink to="/" aria-label="Home page">
          <Logo />
        </HomeLink>
        <AllMerchandiseLink to="/allmerchdise" aria-label="All Merchandise page"> Merchandise Overview</AllMerchandiseLink>
      </HeaderRoot>
    );
  }
}

Header.propTypes = {
  productImagesBrowserStatus: PropTypes.string.isRequired,
  isDesktopViewport: PropTypes.bool,
};

export default Header;
