import { keyframes, css } from '@emotion/core'

/*
 * NOTE: use a six-character hex code for all colors to allow alpha channel
 * adjustment without adding extra vars and/or a color manipulation lib.
 *
 * Example:
 *    // use the brand color at 25% opacity
 *    border-color: ${colors.brand}40;
 */
export const colors = {
  brandDarker: '#221133',
  brandDark: '#15213B',
  brand: '#15213B',
  brandBright: '#e0d6eb',
  brandLight: '#f5f3f7',
  brandLighter: '#fbfafc',
  lightest: '#ffffff',
  darkest: '#4d4058',
  text: '#0E1932',
  textMild: '#555555',
  textLight: '#646A7E',
  textLighter: '#aaaaaa',
  lilac: '#2F66E2',
  accent: '#00D6A6',
  error: '#ec1818',
  lemon: '#D2E6EF',
  gift: '#98B8FE',
}

export const spacing = {
  '3xs': 2,
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
}

export const breakpoints = {
  mobile: 400,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
}

export const radius = {
  default: 2,
  large: 4,
}

export const defaultFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif',
].join()

// const monospaceFontStack = [
//   'Space Mono',
//   'SFMono-Regular',
//   'Menlo',
//   'Monaco',
//   'Consolas',
//   'Liberation Mono',
//   'Courier New',
//   'monospace',
// ].join();

export const fonts = {
  body: `Libre Franklin, ${defaultFontStack}`,
  heading: `Libre Franklin, ${defaultFontStack}`,
  monospace: `Libre Franklin, ${defaultFontStack}`,
}

// export const fonts = {
//   body: defaultFontStack,
//   heading: `Libre Franklin, ${defaultFontStack}`,
//   monospace: monospaceFontStack,
// };

export const dimensions = {
  headerHeight: '60px',
  cartWidthDesktop: '400px',
  desktopAreaWidth: {
    closedDesktop: '60px',
    openDesktop: '340px',
    openHd: '420px',
  },
  pictureBrowserAction: {
    widthDesktop: '200px',
    heightMobile: '80px',
  },
}

export const scrollbarStyles = {
  WebkitOverflowScrolling: 'touch',
  '&::-webkit-scrollbar': { width: '6px', height: '6px' },
  '&::-webkit-scrollbar-thumb': { background: colors.brandBright },
  '&::-webkit-scrollbar-thumb:hover': { background: colors.lilac },
  '&::-webkit-scrollbar-track': { background: colors.brandLight },
}

const simpleEntry = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
`

const deadSimpleEntry = keyframes`
  from {
    opacity: .25;
  }
`

export const animations = {
  simpleEntry: css`
    ${simpleEntry} .75s ease forwards
  `,
  deadSimpleEntry: css`
    ${deadSimpleEntry} .5s ease forwards
  `,
}
