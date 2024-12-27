import { KeyboardAvoidingView,StyleSheet, TextInput,Button, Text, View,Pressable } from 'react-native'
import React from 'react'
import {
    useNavigation,
  } from '@react-navigation/native'

const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  return (
    <KeyboardAvoidingView>
            <Text>SignUp</Text>
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
                <Button title="Register"/>
                <Pressable onPress={() => navigation.navigate('SignIn')}>
                    <Text>Already have an account? Sign In</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({})