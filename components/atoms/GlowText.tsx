import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS, FontVariant } from '../../constants/typography';

interface GlowTextProps extends TextProps {
  variant?: FontVariant;
  color?: string;
  glow?: boolean;
}

const GlowText: React.FC<GlowTextProps> = ({
  children,
  variant = 'body',
  color = COLORS.white,
  glow = false,
  style,
  ...props
}) => {
  const baseFont = FONTS[variant] ?? FONTS.body;

  return (
    <Text
      style={[
        baseFont,
        { color },
        glow && styles.glow,
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  glow: {
    color:            COLORS.yellowPale,
    textShadowColor:  COLORS.yellowPale,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
});

export default GlowText;