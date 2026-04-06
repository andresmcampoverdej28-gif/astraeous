import { Redirect } from 'expo-router';

// El index solo redirige. Toda la UI vive en (tabs).
export default function Index() {
  return <Redirect href="/(tabs)/home" />;
}