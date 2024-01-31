import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHelloWorld}>Yo me llamo</Text>
      <Text style={styles.textName}>José</Text>
      <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/76418657?v=4',
          }}
          style={{width: 200, height: 200, borderRadius: 100}}
        />
      <Text style={styles.textHelloWorld}>y estoy en la clase de dispositivos móviles!</Text>
    </View>

  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHelloWorld: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'sans-serif',
  },
  textName: {
    fontSize: 60,
    margin: 15,
    display: 'flex',
    color: 'purple',
    fontFamily: 'sans-serif',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 10,
  },
});
