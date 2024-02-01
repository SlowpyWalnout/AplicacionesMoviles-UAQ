import React from 'react';
import Constants from 'expo-constants';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

const Main = () => {
    return(
        <View style={styles.dataContainer}>
            <Text style={styles.dataText}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    dataContainer: {
    marginTop: Constants.statusBarHeight,
    textAlign: 'center',
    width: '100 %',
    color: 'white',
    backgroundColor: '#211B1B',
    padding: 10,
  },
  dataText:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
  
export default Main;