import { View, Text,StyleSheet } from "react-native"

export default function UserProfile() {
    return (
        <View style={styles.container}>
        <Text>UserProfile </Text>
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