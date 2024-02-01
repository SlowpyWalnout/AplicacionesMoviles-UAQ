import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";

const ProfileCard = ({image, name, profession}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profession}>{profession}</Text>
        </View>
    );
    };
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    profession: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5,
    },
    });
    
    export default ProfileCard;