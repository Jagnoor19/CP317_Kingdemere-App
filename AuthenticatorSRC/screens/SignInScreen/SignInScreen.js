import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/logo.png';
import CustomIn from '../../components/CustomInputs/CustomIn';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn("Sign in")
    }
    const onSignUpPressed = () => {
        console.warn("Sign up")
    }
    const onForgotPassword = () => {
        console.warn('hi')
    }
    return (
        <ScrollView>
            <View style={s.root}>
                <Image source={Logo} style={[s.logo, {height: height * 0.3}]} resizeMode="contain" />
                <CustomIn 
                    placeholder="Email Address"
                    value = {Email} 
                    setValue={setEmail}
                />
                <CustomIn 
                    placeholder="Password"
                    value={Password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomButton text="Sign In" onPress={onSignInPressed} type = "container_primary"/>
                <CustomButton text ="Forgot password?" onPress={onForgotPassword} type="TERTIARY" />
                <CustomButton text="Don't have an account?" onPress={onSignUpPressed} type="TERTIARY"/>
            
            </View>
        </ScrollView>
    );
};
const s = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 100,
        maxHeight: 200,
        
    }
});
export default SignInScreen