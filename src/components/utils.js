import { css } from "styled-components";

export const sizes = {
  Mobile: 480,
  PortraitTablet: 768,
  LandscapeTablet: 1024,
  Desktop: 1200
};

// `forPortraitTabletUp`, `forLandscapeTabletUp`, `forDesktopUp`,
// `belowPortraitTablet`, `belowLandscapeTablet`, `belowDesktop`,
// are accessible through this helper
export const responsiveHelpers = {
  ...Object.entries(sizes).reduce(
    (generatedHelpers, [label, size]) => ({
      ...generatedHelpers,
      [`for${label}Up`]: (...args) => css`
        @media (min-width: ${size / 16}em) {
          ${css(...args)};
        }
      `,
      [`below${label}`]: (...args) => css`
        @media (max-width: ${(size - 1) / 16}em) {
          ${css(...args)};
        }
      `
    }),
    {}
  )
};
