import { Tabs } from 'expo-router/tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Hide tab labels
        activeTintColor: '#d2ff58',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
            title:'Home | The Meet Up',
            headerShown: false,
          tabBarIcon: ({ focused,color, size }) => (
            <Icon name="home" style={{color: focused ? '#60B419' : color}} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
            title:'Log in | The Meet Up',
            headerShown: false,
          tabBarIcon: ({ focused,color, size }) => (
            <Icon name="account" style={{color: focused ? '#60B419' : color}} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
            title:'Register | The Meet Up',
            headerShown: false,
          tabBarIcon: ({ focused,color, size }) => (
            <Icon name="clipboard-edit-outline" style={{color: focused ? '#60B419' : color}} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
            title:'Event Programme | The Meet Up',
            headerShown: false,
          tabBarIcon: ({ focused,color, size }) => (
            <Icon name="calendar" style={{color: focused ? '#60B419' : color}} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
