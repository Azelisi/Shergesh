import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfile = ({navigation}) => {
  // Состояние профиля пользователя
  const [user, setUser] = useState({
    name: 'John Doe',
    image: require('../assets/Logo.png'),
    trips: ['Париж ', 'Нью-Йорк ', 'Токио '],
  });

  // Функция для редактирования профиля пользователя
  const editProfile = () => {
    // Здесь вы можете добавить логику для редактирования профиля пользователя
    console.log('Редактирование профиля пользователя');
    // navigation.navigate("Edit")
  };

  return (
    <View style={styles.container}>
      <Image source={user.image} style={styles.profileImage} />

      <Text style={styles.name}>{user.name}</Text>

      <Text style={styles.sectionTitle}>Мои путешествия:</Text>
      {user.trips.map((trip, index) => (
        <Text key={index} style={styles.trip}>{trip}</Text>
      ))}

      <TouchableOpacity style={styles.editButton} onPress={editProfile}>
        <Text style={styles.editButtonText}>Редактировать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    marginTop:200,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  trip: {
    fontSize: 14,
    marginBottom: 20,
  },
  editButton: {
    borderRadius:10,
    backgroundColor:'#006666',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
