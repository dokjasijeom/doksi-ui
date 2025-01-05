import { FlattenSimpleInterpolation } from 'styled-components'

export interface ColorType {
  main: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    950: string
  }
  sub: {
    50: string
    100: string
    200: string
    300: string
    400: string
  }
  gray: {
    50: string
    100: string
    200: string
    300: string
    600: string
    800: string
    950: string
  }
  system: {
    w: string
    bk: string
    dim: string
    error: string
    success: string
    series: string
    'kakao-page': string
    ridi: string
    [key: string]: string
  }
}

export interface TypographyType {
  head1: FlattenSimpleInterpolation
  head2: FlattenSimpleInterpolation
  head3: FlattenSimpleInterpolation
  body1: FlattenSimpleInterpolation
  body2: FlattenSimpleInterpolation
  body3: FlattenSimpleInterpolation
  body4: FlattenSimpleInterpolation
  body5: FlattenSimpleInterpolation
  caption: FlattenSimpleInterpolation
}
