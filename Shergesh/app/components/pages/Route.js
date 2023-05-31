import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';


export default function Route() {
  return (
    <View style={styles.container}>
        <Text>SettingsScreen </Text>
        </View>
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
