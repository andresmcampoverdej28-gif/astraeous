import React from 'react';
import { ScrollView, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import AstraAvatar from '../atoms/AstraAvatar';
import AstraBadge from '../atoms/AstraBadge';
import AstraButton from '../atoms/AstraButton';
import AstraDivider from '../atoms/AstraDivider';
import GlowText from '../atoms/GlowText';
import StarField from '../atoms/StarField';

type UserStatus = 'ACTIVO' | 'INACTIVO';

interface ProfileSectionProps {
  onEditProfile?: () => void;
  onSignOut?:     () => void;
  status?:        UserStatus;
}

const STATUS_COLORS: Record<UserStatus, string> = {
  ACTIVO:   '#4ADE80',  // verde
  INACTIVO: '#F87171',  // rojo
};

const STATS = ['PROYECTOS', 'COMMITS', 'RANGO'] as const;

const ProfileSection: React.FC<ProfileSectionProps> = ({
  onEditProfile,
  onSignOut,
  status = 'ACTIVO',
}) => (
  <ScrollView
    className="flex-1"
    contentContainerStyle={{ paddingBottom: 64 }}
    showsVerticalScrollIndicator={false}
  >
    {/* Banner */}
    <View
      className="overflow-hidden border-b border-purple-alpha-30 bg-background-elevated"
      style={{ height: 160 }}
    >
      <StarField />
      {[0.2, 0.5, 0.75].map((top, i) => (
        <View
          key={i}
          className="absolute left-0 right-0 h-px bg-purple-strong"
          style={{ top: `${top * 100}%`, opacity: 0.15 - i * 0.03 }}
        />
      ))}
    </View>

    {/* Avatar */}
    <View className="items-center" style={{ marginTop: -42, marginBottom: 16 }}>
      <AstraAvatar initials="US" size="lg" ring />
    </View>

    {/* Info */}
    <View className="items-center px-6" style={{ gap: 4 }}>
      <GlowText variant="title" glow>Username</GlowText>
      <GlowText variant="caption" color={COLORS.whiteAlpha40}>
        MIEMBRO DE ASTRAEOUS
      </GlowText>
      <View className="flex-row" style={{ gap: 8, marginTop: 4 }}>
        <AstraBadge label="SCRIPTER" variant="role" />

        {/* Badge de status con color dinámico */}
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical:   3,
            borderRadius:      4,
            alignSelf:         'flex-start',
            backgroundColor:   `${STATUS_COLORS[status]}20`,  // color con 12% opacidad
            borderWidth:       1,
            borderColor:       STATUS_COLORS[status],
          }}
        >
          <GlowText
            variant="caption"
            style={{ fontSize: 10, fontWeight: '700', color: STATUS_COLORS[status] }}
          >
            {status}
          </GlowText>
        </View>
      </View>
    </View>

    <AstraDivider variant="glow" style={{ marginHorizontal: 24 }} />

    {/* Stats */}
    <View className="flex-row justify-around px-6" style={{ paddingVertical: 16 }}>
      {STATS.map((stat) => (
        <View key={stat} className="items-center" style={{ gap: 4 }}>
          <GlowText variant="title" glow>—</GlowText>
          <GlowText variant="caption" color={COLORS.whiteAlpha40}>{stat}</GlowText>
        </View>
      ))}
    </View>

    <AstraDivider variant="line" style={{ marginHorizontal: 24 }} />

    {/* Acciones */}
    <View className="px-6" style={{ gap: 16, marginTop: 16 }}>
      <AstraButton label="EDITAR PERFIL"  variant="secondary" fullWidth onPress={onEditProfile} />
      <AstraButton label="CERRAR SESIÓN"  variant="ghost"     fullWidth onPress={onSignOut} />
    </View>
  </ScrollView>
);

export default ProfileSection;