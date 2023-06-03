
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ text, path, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(path)} style={styles.portalButton}>
            <Text style={styles.portalButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#616161',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 100,
        marginBottom: 50,
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 28,
        fontFamily: 'Roboto',
    },
    portalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#006666',
        borderRadius: 6,
        width: 330,
        height: 50,
        marginBottom: 26,
        top: 200,
    },
    portalIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    portalButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'medium',
        fontFamily: 'Roboto',
    },
    signInButton: {
        backgroundColor: 'transparent',
        marginBottom: 15,
    },
    signInButtonText: {
        color: 'white',
        fontSize: 14,
        top: 200,
    },
});
export default ButtonComponent;