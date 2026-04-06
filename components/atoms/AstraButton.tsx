import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS, SPACING } from '../../constants/typography';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';

interface AstraButtonProps {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

const AstraButton: React.FC<AstraButtonProps> = ({
  label,
  variant = 'primary',
  onPress,
  disabled = false,
  fullWidth = false,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        styles.base,
        styles[variant],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style,
      ]}
    >
      {variant === 'primary' && <View style={styles.leftAccent} />}
      <Text style={[styles.label, styles[`${variant}Label`]]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection:   'row',
    alignItems:      'center',
    justifyContent:  'center',
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.lg,
    borderRadius:    6,
    overflow:        'hidden',
    position:        'relative',
  },
  fullWidth: { width: '100%' },
  disabled:  { opacity: 0.4 },

  // Variantes
  primary: {
    backgroundColor: COLORS.purpleStrong,
    borderWidth:     1,
    borderColor:     COLORS.purpleMid,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth:     1.5,
    borderColor:     COLORS.purpleStrong,
  },
  accent: {
    backgroundColor: COLORS.yellowPale,
  },
  ghost: {
    backgroundColor: COLORS.purpleAlpha15,
  },

  // Labels
  label: {
    ...FONTS.caption,
    fontWeight: '700',
  },
  primaryLabel:   { color: COLORS.white },
  secondaryLabel: { color: COLORS.purpleStrong },
  accentLabel:    { color: COLORS.purpleDeep },
  ghostLabel:     { color: COLORS.whiteAlpha80 },

  // Detalle decorativo
  leftAccent: {
    position:        'absolute',
    left:            0,
    top:             4,
    bottom:          4,
    width:           3,
    backgroundColor: COLORS.yellowPale,
    borderRadius:    2,
  },
});

export default AstraButton;