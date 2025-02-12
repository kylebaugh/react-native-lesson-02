import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import icedCofeeImg from '../../assets/images/iced-coffee.png'


const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCofeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})