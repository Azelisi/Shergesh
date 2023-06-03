import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../AuthContext';

const Reg = ({ navigation }) => {
    
    const { isAuthenticated, setIsAuthenticated } = React.useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isButtonDisabled = !username || !password;

    const handleLogin = () => {
        // Код для отправки данных на бекенд
        console.log({ Username: `${username}`, Password: `${password}` });
        setIsAuthenticated(true);
    };

    return (

        <View style={styles.container}>
            <Text style={styles.headerText}>Введите логин и пароль от вашего профиля на портале</Text>
            <TextInput
                style={styles.input}
                placeholder="Введите логин"
                placeholderTextColor="#707070"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Введите пароль"
                placeholderTextColor="#707070"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={[styles.button, { opacity: isButtonDisabled ? 0.5 : 1 }]}
                onPress={() => {
                    handleLogin();
                }}
                disabled={isButtonDisabled}
            >
                <Text style={styles.buttonText}>Продолжить  </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 100,
        marginBottom: 50,
    },
    headerText: {
        marginTop:100,
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'Roboto',
    },
    portalButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'medium',
        fontFamily: 'Roboto',
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#383838',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        fontSize: 16,
        top: 25,
        color: '#fff',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#78DBE2',
        borderRadius: 6,
        width: 330,
        height: 50,
        marginBottom: 26,
        top: 350,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
    },

});

export default Reg;