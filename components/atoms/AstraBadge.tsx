import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS, SPACING } from '../../constants/typography';

type BadgeVariant = 'role' | 'status' | 'tag';

interface AstraBadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
}

const AstraBadge: React.FC<AstraBadgeProps> = ({
  label,
  variant = 'role',
  style,
}) => (
  <View style={[styles.base, styles[variant], style]}>
    <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: SPACING.sm,
    paddingVertical:   3,
    borderRadius:      4,
    alignSelf:         'flex-start',
  },
  text: {
    ...FONTS.caption,
    fontSize:   10,
    fontWeight: '700',
  },

  role: {
    backgroundColor: COLORS.purpleAlpha30,
    borderWidth:     1,
    borderColor:     COLORS.purpleStrong,
  },
  roleText: { color: COLORS.purpleStrong },

  status: {
    backgroundColor: COLORS.yellowAlpha30,
    borderWidth:     1,
    borderColor:     COLORS.yellowPale,
  },
  statusText: { color: COLORS.yellowPale },

  tag: {
    backgroundColor: COLORS.whiteAlpha10,
    borderWidth:     1,
    borderColor:     COLORS.whiteAlpha40,
  },
  tagText: { color: COLORS.whiteAlpha80 },
});

export default AstraBadge;