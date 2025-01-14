import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style ={styles.container}>
      <TouchableOpacity>
      <Image 
      style = {styles.logo}
      source={require('../../assets/cc.png')}
      />
      </TouchableOpacity>
      <View style = {styles.iconContainer}>
        <TouchableOpacity>
          <Image style = {styles.icon}
      source={require('../../assets/msg.jpg')}>

          </Image>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 5, // Adjust as needed
    paddingBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    left: -10,
    top: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
    top: 20,
  },
})

export default Header
