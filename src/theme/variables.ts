//
// Breakpoints
//
export const XS_BREAKPOINT = 'xs';
export const S_BREAKPOINT = 'sm';
export const M_BREAKPOINT = 'md';
export const L_BREAKPOINT = 'lg';

export const DEFAULT_BREAKPOINT = L_BREAKPOINT;

export const minWidth = {
  [XS_BREAKPOINT]: '0',
  [S_BREAKPOINT]: '768px',
  [M_BREAKPOINT]: '1024px',
  [L_BREAKPOINT]: '1440px',
};

export const mediaQueries = {
  [XS_BREAKPOINT]: `@media (min-width: ${minWidth[XS_BREAKPOINT]})`,
  [S_BREAKPOINT]: `@media (min-width: ${minWidth[S_BREAKPOINT]})`,
  [M_BREAKPOINT]: `@media (min-width: ${minWidth[M_BREAKPOINT]})`,
  [L_BREAKPOINT]: `@media (min-width: ${minWidth[L_BREAKPOINT]})`,
};

export const colors = {
  default: '#020d18',
  white: '#ffffff',
  gray: '#abb7c4',
  lightGray: '#ededed',
  blue: '#4280bf',
  darkBlue: '#0f2133',
  orange: '#fd7702',
  lightOrange: '#E89611',
  otherOrange: '#E36C14',
  yellow: '#febd09',
};

export const buttonStyles = {
  'border-radius': '20px',
  cursor: 'pointer',
  flex: 1,
  'font-size': '16px',
  padding: '10px 20px',
  'text-decoration': 'none',
};
