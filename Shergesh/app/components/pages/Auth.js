import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import ButtonComponent from './ButtonCustom'

export default function Auth({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/img/rock.jpg')} resizeMode='cover' style={styles.image}> 
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>Зарегистрируйтесь в приложении</Text>
            </View>
            <StatusBar barStyle="auto"/>
            <ButtonComponent text="Войти" path="Авторизация" navigation={navigation} />
            <TouchableOpacity onPress={() => navigation.navigate('Авторизация')} style={styles.signInButton}>
                <Text style={styles.signInButtonText}>У меня уже есть аккаунт  </Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 100,
        marginBottom: 50,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'Roboto',
        color: 'white',
    },
    portalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        width: 330,
        height: 50,
        marginBottom: 26,
        marginTop: 200,
    },
    portalIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    portalButtonText: {
        fontSize: 14,
        fontWeight: 'medium',
        fontFamily: 'Roboto',
    },
    signInButton: {
        fontSize: 14,
        marginTop: 400,
    },
    signInButtonText:{
        color: 'white',
    }
    
});