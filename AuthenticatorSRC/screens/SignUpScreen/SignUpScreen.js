import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/logo.png';
import CustomIn from '../../components/CustomInputs/CustomIn';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Confirm, setConfirm] = useState('');
    const {height} = useWindowDimensions();
    const onRegisterPressed = () => {
        console.warn("Register")
    }
    const onAlreadyAccount = () => {
        console.warn("Forgotten Password")
    }
    const onPrivacyPressed = () => {
        console.warn("Privacy")
    }
    return (
        <ScrollView>
            <View style={s.root}>
                <Text style={s.title}>Create an Account</Text>
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
                <CustomIn
                    placeholder="Confirm Password"
                    value={Confirm}
                    setValue={setConfirm}
                    sedcureTextEntry={true}
                />
                <Text style={s.text}>
                    By registering, you confirm that you accept our 
                    <Text style={s.hyper} onPress={onPrivacyPressed}> Terms and Conditions</Text>
                </Text>
                <CustomButton text="Register" onPress={onRegisterPressed} type = "container_primary"/>
                <CustomButton text="Have an account? Sign in" onPress={onAlreadyAccount} type="TERTIARY"/>
            
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
        
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
    },
    text:{
        color: 'grey',
        marginVertical: 10,
    },
    hyper:{
        color: '#FFC0CB',
    }

});
export default SignUpScreen