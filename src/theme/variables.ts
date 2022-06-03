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
