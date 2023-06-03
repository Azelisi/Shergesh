import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from '../components/HomeScreen';
import  SettingsScreen  from '../components/SettingsScreen';
import UserProfile from '../components/UserProfile';
import RouteMap from '../components//pages/RouteMap';
import Auth from '../components/pages/Auth';
import Reg from '../components/pages/Reg';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet,Image } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthContext } from '../components/AuthContext';
import ProfileEdit from '../components/pages/ProfileEdit';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <NavigationContainer>
        
        {isAuthenticated ? (
        <Tab.Navigator screenOptions={{
                            tabBarShowLabel: false,
                            tabBarActiveTintColor: 'black',
                        }}>
          <Tab.Screen name="Home" component={HomeScreen} 
           options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../assets/img/Map_active.png') : require('../assets/img/Map.png')}
                    style={{ width: 30, height: 30 }}
                />
            ),
        }} />
          
          <Tab.Screen name="UserProfile" component={UserProfile} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? require('../assets/img/Profile_active.png') : require('../assets/img/Profile.png')}
                style={{ width: 30, height: 30 }}
                />
            ),
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../assets/img/Settings_active.png') : require('../assets/img/Settings.png')}
                    style={{ width: 30, height: 30 }}
                />
            ),
        }} />
        </Tab.Navigator>
          ) : ( <Stack.Navigator
            screenOptions={{
               headerShown: false,
                headerMode: 'screen',
                headerTintColor: 'white',
                
            }}
        >
            <Stack.Screen name="Вход" component={Auth} />
            <Stack.Screen name="Авторизация" component={Reg} />
            <Stack.Screen name="Edit" component={ProfileEdit} />
        </Stack.Navigator>
    )}
      </NavigationContainer>
      </AuthContext.Provider>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#616161',
    },
});