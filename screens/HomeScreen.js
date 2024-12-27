import { 
    StyleSheet, 
    Text, 
    View, 
    Button } from 'react-native'
import React from 'react'
import {
    useNavigation,
  } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to Signin" onPress={() => navigation.navigate('SignIn')} />
        <Button title="Go to Signup" onPress={() => navigation.navigate('SignUp')} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})