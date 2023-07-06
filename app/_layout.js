import { Tabs } from 'expo-router/tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Hide tab labels
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
            title:'Home | The Meet Up',
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
            title:'Log in | The Meet Up',
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
            title:'Register | The Meet Up',
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-edit-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
            title:'Event Programme | The Meet Up',
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
