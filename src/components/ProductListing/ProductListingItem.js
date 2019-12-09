import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import { MdArrowForward } from 'react-icons/md';
import UserContext from '../../context/UserContext';

import {
  removeCareInstructions,
  cutDescriptionShort,
} from '../../utils/helpers';

import {
  breakpoints,
  colors,
  fonts,
  radius,
  spacing,
} from '../../utils/styles';

const DESCRIPTION_LIMIT = 90;
const TRANSITION_DURATION = '250ms';
const ProductListingItemLink = styled(Link)`
  background: ${colors.lightest};
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.2s ease 0s;
  font-family: ${fonts.body};
  

  @media (hover: hover) {
    :hover {    
      box-shadow: #e6e6e6 0px 2px 4px 0px;
    }
  }
`;

// TODO V1 
// const ProductListingItemLink = styled(Link)`
//   background: ${colors.lightest};
//   border-radius: ${radius.large}px;
//   box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
//   margin-bottom: ${spacing.lg}px;
//   overflow: hidden;
//   text-decoration: none;
//   transition: all ${TRANSITION_DURATION};
//   font-family: ${fonts.body};

//   @media (min-width: ${breakpoints.tablet}px) {
//     margin-left: auto;
//     margin-right: auto;
//     max-width: 500px;
//   }

//   @media (min-width: ${breakpoints.desktop}px) {
//     flex-basis: 300px;
//     justify-content: center;
//     margin: ${spacing.md * 1.25}px;
//   }

//   @media (hover: hover) {
//     :hover {
//       background: ${colors.brandLighter};
//     }
//   }
// `;

// const Item = styled('article')`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   padding: ${spacing.lg}px;
// `;
const Item = styled('article')`
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: ${spacing.lg}px;
  height: 100%;
  @media (min-width: 1024px) {
    height: ${props => (props.totalCount > '2' ? '100%' : '480px')};
  }
  @media (min-width: 1025px) {
    height: ${props => (props.totalCount > '2' ? '100%' : '660px')};
    max-height: 85vh;
  }
  @media (min-width: 1460px) {
    height: 100%;
    max-height: ${props => (props.totalCount > '2' ? 'auto' : '85vh')};
  }
`;
const Preview = styled('div')`
  border-bottom: 1px solid ${colors.brandLight};
  border-radius: ${radius.large}px ${radius.large}px 0 0;
  margin: -${spacing.lg}px;
  margin-bottom: ${spacing.lg}px;
  overflow: hidden;
  position: relative;

  .gatsby-image-wrapper {
    transition: all ${TRANSITION_DURATION};
    background: #f1f1f1;
    @media (min-width: ${breakpoints.desktop}px) {
      max-height: 43vmax;
    }
  }

  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      .gatsby-image-wrapper {
       // transform: scale(1.1);
      }
    }
  }
`;


const Name = styled('h1')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.brandDark};
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  line-height: 1.2;
  letter-spacing: 0.03em;
  margin: 0;
  min-height: 2.5em;
  span {
    font-size: 70%;
    color: ${colors.textLight};
    font-weight: normal;
  }
`;

const Description = styled('p')`
  color: ${colors.text};
  flex-grow: 1;
  font-size: 1rem;
  line-height: 1.5;
`;


const PriceRow = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: top;
  margin-top: ${spacing.xs}px;
`;

const Price = styled('div')`
  font-family: ${fonts.monospace};
  color: ${colors.brand};
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  span {
    color: ${colors.textLight};
    opacity: 0.8;
    font-size: 70%;
    margin-right: ${spacing['2xs']}px;
  }
  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      transform: translateY(-10px);
    }
  }
  transition: all ${TRANSITION_DURATION};
`;


const Incentive = styled('div')`
  align-items: center;
  color: ${colors.textLight};
  display: flex;
  font-size: 0.85rem;
  line-height: 1.3;
  opacity: 0;
  text-align: right;
  transition: all ${TRANSITION_DURATION};
  background: ${colors.brandLighter};
  padding: ${spacing.sm}px ${spacing.md}px;
  transform: translateY(65px);
  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      transform: translateY(25px);
      opacity: 1;
    }
  }

  > span {
    svg {
      display: inline;
      margin-right: -${spacing['3xs']}px;
      vertical-align: middle;
    }
  }
`;
// const CartIcon = styled('span')`
//   align-items: center;
//   background: ${colors.lilac};
//   border-radius: ${radius.default}px 0 0 ${radius.default}px;
//   display: flex;
//   height: 40px;
//   justify-content: center;
//   margin-left: ${spacing.lg}px;
//   position: relative;
//   transition: all ${TRANSITION_DURATION};
//   vertical-align: middle;
//   width: 40px;

//   @media (hover: hover) {
//     ${ProductListingItemLink}:hover & {
//       margin-left: ${spacing.xs}px;
//     }
//   }

//   svg {
//     color: ${colors.accent};
//     height: 22px;
//     position: relative;
//     width: 22px;
//   }
// `;

const ProductListingItem = props => {
  const {
    product: {
      title,
      handle,
      description,
      variants: [firstVariant],
      images: [firstImage],
    },
  } = props;

  const { price } = firstVariant;
  const {
    localFile: {
      childImageSharp: { fluid },
    },
  } = firstImage;

  return (
    <UserContext.Consumer>
      {() => (
        <ProductListingItemLink to={`/product/${handle}`}>
          <Item>
            <Preview>
              <Image fluid={fluid} />
            </Preview>
            <Name>{title}</Name>
            <Description>
              {cutDescriptionShort(
                removeCareInstructions(description),
                DESCRIPTION_LIMIT,
              )}
            </Description>
            <PriceRow>
              <Price>
                <span>USD</span> ${price}
              </Price>
              <Incentive>
                <span>
                  view details
                  <br />& buy <MdArrowForward />
                </span>

              </Incentive>
            </PriceRow>
          </Item>
        </ProductListingItemLink>
      )}
    </UserContext.Consumer>
  );
};

ProductListingItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductListingItem;
