import { css } from 'styled-components';
import FlattenSimpleInterpolation
import { breakpoints } from './breackpoints';

export const media = {
  mobile: (styles: FlattenSimpleInterpolation) => css`
    @media (max-width: ${breakpoints.mobile}px) {
      ${styles}
    }
  `,
  tablet: (styles: FlattenSimpleInterpolation) => css`
    @media (max-width: ${breakpoints.tablet}px) {
      ${styles}
    }
  `,
  desktop: (styles: FlattenSimpleInterpolation) => css`
    @media (max-width: ${breakpoints.desktop}px) {
      ${styles}
    }
  `,
};
