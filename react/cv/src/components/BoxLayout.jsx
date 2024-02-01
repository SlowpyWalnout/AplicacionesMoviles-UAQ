import React from 'react';
import {Text, View, StyleSheet, } from 'react-native';

const BoxLayout = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.Title}>{props.title}</Text>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center', // Agrega esta línea
        justifyContent: 'center', // Agrega esta línea
        color: 'white',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10, 
    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'brown',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
});
export default BoxLayout;