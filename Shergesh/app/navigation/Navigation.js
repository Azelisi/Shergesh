import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from '../components/HomeScreen';
import  SettingsScreen  from '../components/SettingsScreen';
import UserProfile from '../components/UserProfile';
import Route from '../components/Route';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet,Image } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
      <NavigationContainer>
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
        <Tab.Navigator>
        <Stack.Screen name="Маршрут" component={Route} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#616161',
    },
});