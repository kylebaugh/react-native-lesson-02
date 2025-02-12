import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import icedCofeeImg from '../../assets/images/iced-coffee.png'

const Explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCofeeImg} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Address: 123 Main St, Anytown, USA</Text>
        <Text style={styles.text}>Phone: (123) 456-7890</Text>
        <Text style={styles.text}>Email: I6Q7a@example.com</Text>
      </ImageBackground>
    </View>
  )
}

export default Explore

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
    flexDirection: 'column',
    gap: 40,
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