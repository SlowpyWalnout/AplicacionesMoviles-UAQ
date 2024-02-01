import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

const DescriptionCard = (props) => {
    return(
        <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>{props.title}</Text>
            <Text style={styles.dataText}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    dataContainer: {
    width: '80 %',
    alignContent: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  dataText:{
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  dataTitle:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default DescriptionCard;