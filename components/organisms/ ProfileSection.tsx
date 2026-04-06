import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/typography';
import AstraAvatar from '../atoms/AstraAvatar';
import AstraBadge from '../atoms/AstraBadge';
import AstraButton from '../atoms/AstraButton';
import AstraDivider from '../atoms/AstraDivider';
import GlowText from '../atoms/GlowText';
import StarField from '../atoms/StarField';

interface ProfileSectionProps {
  onEditProfile?: () => void;
}

const STATS = ['PROYECTOS', 'COMMITS', 'RANGO'] as const;

const ProfileSection: React.FC<ProfileSectionProps> = ({ onEditProfile }) => (
  <ScrollView
    style={styles.scroll}
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
  >
    {/* Banner */}
    <View style={styles.banner}>
      <StarField />
      {[0.2, 0.5, 0.75].map((top, i) => (
        <View
          key={i}
          style={[styles.bannerLine, { top: `${top * 100}%`, opacity: 0.15 - i * 0.03 }]}
        />
      ))}
    </View>

    {/* Avatar flotante */}
    <View style={styles.avatarWrapper}>
      <AstraAvatar initials="US" size="lg" ring />
    </View>

    {/* Info */}
    <View style={styles.infoBlock}>
      <GlowText variant="title" glow>Username</GlowText>
      <GlowText variant="caption" color={COLORS.whiteAlpha40}>
        MIEMBRO DE ASTRAEOUS
      </GlowText>
      <View style={styles.badgeRow}>
        <AstraBadge label="SCRIPTER" variant="role" />
        <AstraBadge label="ACTIVO"   variant="status" />
      </View>
    </View>

    <AstraDivider variant="glow" style={styles.divider} />

    {/* Stats */}
    <View style={styles.statsRow}>
      {STATS.map((stat) => (
        <View key={stat} style={styles.statItem}>
          <GlowText variant="title" glow>—</GlowText>
          <GlowText variant="caption" color={COLORS.whiteAlpha40}>{stat}</GlowText>
        </View>
      ))}
    </View>

    <AstraDivider variant="line" style={styles.divider} />

    {/* Acciones */}
    <View style={styles.actions}>
      <AstraButton label="EDITAR PERFIL"   variant="secondary" fullWidth onPress={onEditProfile} />
      <AstraButton label="CONFIGURACIÓN"   variant="ghost"     fullWidth />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scroll:     { flex: 1 },
  container:  { paddingBottom: SPACING.xxxl },
  banner: {
    height:          160,
    backgroundColor: COLORS.backgroundElevated,
    overflow:        'hidden',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.purpleAlpha30,
  },
  bannerLine: {
    position:        'absolute',
    left:            0,
    right:           0,
    height:          1,
    backgroundColor: COLORS.purpleStrong,
  },
  avatarWrapper: {
    alignItems:   'center',
    marginTop:    -42,
    marginBottom: SPACING.md,
  },
  infoBlock: {
    alignItems:        'center',
    gap:               SPACING.xs,
    paddingHorizontal: SPACING.lg,
  },
  badgeRow: {
    flexDirection: 'row',
    gap:           SPACING.sm,
    marginTop:     SPACING.xs,
  },
  statsRow: {
    flexDirection:  'row',
    justifyContent: 'space-around',
    paddingHorizontal: SPACING.lg,
    paddingVertical:   SPACING.md,
  },
  statItem: {
    alignItems: 'center',
    gap:        4,
  },
  divider: { marginHorizontal: SPACING.lg },
  actions: {
    paddingHorizontal: SPACING.lg,
    gap:               SPACING.md,
    marginTop:         SPACING.md,
  },
});

export default ProfileSection;