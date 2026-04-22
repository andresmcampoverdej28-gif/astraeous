import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AstraDivider from '../../components/atoms/AstraDivider';
import GlowText from '../../components/atoms/GlowText';
import StarField from '../../components/atoms/StarField';
import AstraHeader from '../../components/molecules/ AstraHeader';
import MemberLoginForm from '../../components/organisms/MemberLoginForm';
import { COLORS } from '../../constants/colors';

export default function MemberLoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <View className="flex-1">
        <View
          className="relative overflow-hidden border-b border-purple-alpha-30 bg-background-elevated"
          style={{ height: 180 }}
        >
          <StarField />
          <View className="absolute inset-0" style={{ opacity: 0.18, backgroundColor: COLORS.purpleStrong }} />

          <View style={{ paddingTop: 12 }}>
            <AstraHeader title="MIEMBROS" subtitle="USUARIO Y CONTRASEÑA" showLogo />
          </View>
        </View>

        <View className="px-6" style={{ gap: 16, marginTop: 18 }}>
          <GlowText variant="body" color={COLORS.whiteAlpha80} style={{ lineHeight: 22 }}>
            Inicia sesión con tus credenciales de Astraeous.
          </GlowText>

          <AstraDivider variant="glow" />

          <MemberLoginForm
            onCancel={() => router.back()}
            onSubmit={({ username }) => {
              // Placeholder hasta conectar auth real
              Alert.alert('Ingreso (demo)', `Bienvenido, ${username}.`, [
                { text: 'Continuar', onPress: () => router.replace('/(tabs)/profile') },
              ]);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
