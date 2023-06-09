import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './app/navigation/Navigation';
import Auth from './app/components/pages/Auth';
import Reg from './app/components/pages/Reg';


export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation/>
        <StatusBar style='black' />
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
