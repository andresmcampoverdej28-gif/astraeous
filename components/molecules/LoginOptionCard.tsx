import React from 'react';
import { Pressable, View, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';
import AstraBadge from '../atoms/AstraBadge';
import GlowText from '../atoms/GlowText';

interface LoginOptionCardProps {
  title: string;
  description: string;
  badge?: { label: string; variant?: 'role' | 'status' | 'tag' };
  onPress?: () => void;
  style?: ViewStyle;
}

const LoginOptionCard: React.FC<LoginOptionCardProps> = ({
  title,
  description,
  badge,
  onPress,
  style,
}) => (
  <Pressable
    accessibilityRole="button"
    disabled={!onPress}
    onPress={onPress}
    className="relative overflow-hidden rounded-[12px] border border-white-alpha-10 bg-background-card"
    style={[{ padding: 16, gap: 10 }, style]}
  >
    {/* esquina decorativa */}
    <View
      className="absolute right-0 top-0 rounded-bl-lg border-b border-l border-purple-alpha-30 bg-purple-alpha-15"
      style={{ width: 26, height: 26 }}
    />

    {badge ? (
      <AstraBadge
        label={badge.label}
        variant={badge.variant ?? 'tag'}
        style={{ alignSelf: 'flex-start' }}
      />
    ) : null}

    <GlowText variant="subtitle" glow>
      {title}
    </GlowText>

    <GlowText variant="body" color={COLORS.whiteAlpha80} style={{ lineHeight: 22 }}>
      {description}
    </GlowText>

    {/* línea inferior suave */}
    <View className="h-px bg-purple-alpha-15" style={{ marginTop: 6 }} />

    <GlowText variant="caption" color={COLORS.whiteAlpha40}>
      TOCA PARA CONTINUAR
    </GlowText>
  </Pressable>
);

export default LoginOptionCard;
