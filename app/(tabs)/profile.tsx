import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileSection from '../../components/organisms/ ProfileSection';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ProfileSection
        onEditProfile={() => router.push('/edit-profile')}
      />
    </SafeAreaView>
  );
}