import { TextStyle } from 'react-native';

export const FONTS: Record<string, TextStyle> = {
  display: {
    fontSize:      36,
    fontWeight:    '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize:      22,
    fontWeight:    '700',
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize:      16,
    fontWeight:    '600',
    letterSpacing: 1,
  },
  body: {
    fontSize:   14,
    fontWeight: '400',
    lineHeight: 22,
  },
  caption: {
    fontSize:      11,
    fontWeight:    '600',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  mono: {
    fontSize:      12,
    fontWeight:    '400',
    letterSpacing: 0.5,
  },
} as const;

export type FontVariant = keyof typeof FONTS;

export const SPACING = {
  xs:   4,
  sm:   8,
  md:   16,
  lg:   24,
  xl:   32,
  xxl:  48,
  xxxl: 64,
} as const;