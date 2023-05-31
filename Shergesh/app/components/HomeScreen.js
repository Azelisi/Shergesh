import { View, Text,StyleSheet } from "react-native"
import { YaMap } from "react-native-yamap";

YaMap.init('2d8a6e59-1e8c-409d-885a-ec2ae0abe7c3');

export default function HomeScreen() {
    return (
      <YMaps>
      <div>My awesome application with maps!</div>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </YMaps>
    );
  }
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },map: {
      width: '100%',
      height: '100%',
    },
  });