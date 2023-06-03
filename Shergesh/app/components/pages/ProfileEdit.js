import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProfileEdit = ({navigation}) => {
  // Состояние полей профиля
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('Hello, I am John Doe.');

  // Функция для обновления профиля пользователя
  const updateProfile = () => {
    // Здесь вы можете добавить логику для обновления профиля пользователя на сервере
    console.log('Профиль пользователя обновлен!');
    navigation.navigate("UserProfile")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Изменение профиля</Text>

      <Text>Имя пользователя:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text>О себе:</Text>
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setBio}
        multiline
      />

      <Button title="Сохранить профиль" onPress={updateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProfileEdit;
