import { Tabs } from 'expo-router';
import { FolderKanban, House, UserRoundCog, UsersRound } from 'lucide-react-native';
import { type ComponentType } from 'react';
import { View } from 'react-native';
import { COLORS } from '../../constants/colors';

type LucideIcon = ComponentType<{
  color?: string;
  size?: number;
  strokeWidth?: number;
}>;

interface TabIconProps {
  icon: LucideIcon;
  focused: boolean;
  color: string;
}

function TabIcon({ icon, focused, color }: TabIconProps) {
  const Icon = icon;

  return (
    <View
      className="items-center justify-center relative overflow-hidden rounded-2xl"
      style={{
        paddingHorizontal: 14,
        paddingVertical: 6,
        backgroundColor: focused ? COLORS.whiteAlpha10 : 'transparent',
        borderWidth: focused ? 1 : 0,
        borderColor: focused ? COLORS.yellowAlpha30 : 'transparent',
      }}
    >
      {focused && (
        <View
          className="absolute -right-3 -top-3 h-8 w-8 rounded-full"
          style={{ backgroundColor: COLORS.purpleAlpha15 }}
        />
      )}
      {focused && (
        <View
          className="absolute -left-3 -bottom-3 h-8 w-8 rounded-full"
          style={{ backgroundColor: COLORS.yellowAlpha30 }}
        />
      )}
      <Icon
        color={color}
        size={24}
        strokeWidth={focused ? 2.5 : 2.1}
      />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.backgroundCard,
          borderTopWidth: 1,
          borderTopColor: COLORS.purpleAlpha30,
          height: 74,
          paddingBottom: 12,
          paddingTop: 10,
          paddingHorizontal: 10,
          elevation: 10,
          shadowColor: COLORS.purpleStrong,
          shadowOffset: { width: 0, height: -8 },
          shadowOpacity: 0.18,
          shadowRadius: 18,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.yellowPale,
        tabBarInactiveTintColor: COLORS.whiteAlpha40,
        tabBarItemStyle: {
          paddingHorizontal: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon={House} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon={FolderKanban} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon={UsersRound} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon={UserRoundCog} focused={focused} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}