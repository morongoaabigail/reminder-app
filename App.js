import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';
import LandingPage from './LandingPage';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const InvisibleIcon = () => null;

function App() {
  const [reminders, setReminders] = useState([]);

  return (
    <NavigationContainer>
      
      <Tab.Navigator
        initialRouteName="LandingPage"
        tabBarOptions={{
          style: {
            backgroundColor: 'lightgray',
          },
          showLabel: false,
        }}>
        <Tab.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ReminderForm"
          component={() => (
            <ReminderForm reminders={reminders} setReminders={setReminders} />
          )}
          options={{
            tabBarIcon: InvisibleIcon,

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ReminderList"
          component={() => <ReminderList reminders={reminders} />}
          options={{
            tabBarIcon: ({ color, size }) => (
              

              <FontAwesome name="birthday-cake" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
