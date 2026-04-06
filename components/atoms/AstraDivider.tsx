import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';

type DividerVariant = 'line' | 'glow' | 'dashed';

interface AstraDividerProps {
  variant?: DividerVariant;
  style?: ViewStyle;
}

const AstraDivider: React.FC<AstraDividerProps> = ({
  variant = 'line',
  style,
}) => {
  if (variant === 'glow') {
    return (
      <View style={[styles.glowContainer, style]}>
        <View style={styles.glowLine} />
        <View style={styles.glowDot} />
        <View style={styles.glowLine} />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.base,
        variant === 'dashed' && styles.dashed,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    height:          1,
    backgroundColor: COLORS.whiteAlpha10,
    marginVertical:  16,
  },
  dashed: {
    borderStyle:     'dashed',
    borderWidth:     1,
    borderColor:     COLORS.purpleAlpha30,
    backgroundColor: 'transparent',
    height:          0,
  },
  glowContainer: {
    flexDirection:  'row',
    alignItems:     'center',
    marginVertical: 16,
  },
  glowLine: {
    flex:            1,
    height:          1,
    backgroundColor: COLORS.purpleAlpha30,
  },
  glowDot: {
    width:           6,
    height:          6,
    borderRadius:    3,
    backgroundColor: COLORS.yellowPale,
    marginHorizontal: 10,
    shadowColor:     COLORS.yellowPale,
    shadowOffset:    { width: 0, height: 0 },
    shadowOpacity:   1,
    shadowRadius:    6,
    elevation:       4,
  },
});

export default AstraDivider;