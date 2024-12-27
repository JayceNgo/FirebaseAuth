import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View,Button, Pressable } from 'react-native'
import React from 'react'
import {
    useNavigation,
  } from '@react-navigation/native'

const SignIn = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  return (
    <KeyboardAvoidingView>
        <Text>SignIn</Text>
        <View>
            <TextInput 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"            
            />
            <TextInput 
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            />
            <Button title="SignIn"/>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text>Don't have an account? Sign Up</Text>
            </Pressable>
        </View>
    </KeyboardAvoidingView>
    
  )
}

export default SignIn

const styles = StyleSheet.create({})