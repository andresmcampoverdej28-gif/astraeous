import { SafeAreaView } from 'react-native-safe-area-context';
import LoginGate from '../../components/organisms/LoginGate';

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <LoginGate />
    </SafeAreaView>
  );
}
