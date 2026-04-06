import React from 'react';
import { View, StyleSheet } from 'react-native';
import StarField from '../atoms/StarField';
import GlowText from '../atoms/GlowText';
import AstraBadge from '../atoms/AstraBadge';
import AstraButton from '../atoms/AstraButton';
import AstraDivider from '../atoms/AstraDivider';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/typography';

interface HomeHeroProps {
  onPressProjects?: () => void;
  onPressTeam?:     () => void;
}

const HomeHero: React.FC<HomeHeroProps> = ({
  onPressProjects,
  onPressTeam,
}) => (
  <View style={styles.container}>
    <StarField />

    {/* Orbe central */}
    <View style={styles.orbeOuter}>
      <View style={styles.orbeMid}>
        <View style={styles.orbeInner}>
          <GlowText variant="display" glow style={styles.orbeSymbol}>✦</GlowText>
        </View>
      </View>
    </View>

    {/* Texto */}
    <View style={styles.textBlock}>
      <AstraBadge label="ROBLOX DEVELOPMENT GROUP" variant="role" />
      <GlowText variant="display" glow style={styles.mainTitle}>
        ASTRAEOUS
      </GlowText>
      <GlowText variant="subtitle" color={COLORS.whiteAlpha80} style={styles.tagline}>
        Construyendo mundos más allá de los límites
      </GlowText>
    </View>

    <AstraDivider variant="glow" style={styles.divider} />

    {/* CTAs */}
    <View style={styles.ctaRow}>
      <AstraButton label="PROYECTOS"      variant="primary"   onPress={onPressProjects} style={styles.ctaBtn} />
      <AstraButton label="NUESTRO EQUIPO" variant="secondary" onPress={onPressTeam}     style={styles.ctaBtn} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:              1,
    alignItems:        'center',
    justifyContent:    'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical:   SPACING.xxl,
    gap:               SPACING.lg,
    overflow:          'hidden',
  },
  orbeOuter: {
    width:           120,
    height:          120,
    borderRadius:    60,
    borderWidth:     1,
    borderColor:     COLORS.purpleAlpha30,
    alignItems:      'center',
    justifyContent:  'center',
    marginBottom:    SPACING.md,
  },
  orbeMid: {
    width:           85,
    height:          85,
    borderRadius:    42.5,
    borderWidth:     1,
    borderColor:     COLORS.purpleAlpha30,
    alignItems:      'center',
    justifyContent:  'center',
  },
  orbeInner: {
    width:           55,
    height:          55,
    borderRadius:    27.5,
    backgroundColor: COLORS.purpleAlpha30,
    borderWidth:     1,
    borderColor:     COLORS.purpleStrong,
    alignItems:      'center',
    justifyContent:  'center',
    shadowColor:     COLORS.purpleStrong,
    shadowOffset:    { width: 0, height: 0 },
    shadowOpacity:   0.8,
    shadowRadius:    12,
  },
  orbeSymbol: { fontSize: 26 },
  textBlock: {
    alignItems: 'center',
    gap:        SPACING.sm,
  },
  mainTitle: {
    fontSize:   42,
    textAlign:  'center',
    letterSpacing: 6,
  },
  tagline: {
    textAlign:  'center',
    lineHeight: 24,
  },
  divider: { width: '80%' },
  ctaRow: {
    flexDirection:  'row',
    gap:            SPACING.md,
    flexWrap:       'wrap',
    justifyContent: 'center',
  },
  ctaBtn: { minWidth: 130 },
});

export default HomeHero;