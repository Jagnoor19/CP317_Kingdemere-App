import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/logo.png';
import CustomIn from '../../components/CustomInputs/CustomIn';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
    const [Confirmation, setConfirmation] = useState('');

    const onConfirmPressed = () => {
        console.warn("Confirm")
    }
    const onResendCode= () => {
        console.warn("Resend Code")
    }
    const onBackToSignIn = () => {
        console.warn("Back to Sign In")
    }
    return (
        <ScrollView>
            <View style={s.root}>
                <Text style={s.title}>Enter Confirmation Code</Text>
                <CustomIn 
                    placeholder="Enter your confirmation code"
                    value = {Confirmation} 
                    setValue={setConfirmation}
                />
                <CustomButton text="Confirm" onPress={onConfirmPressed} type = "container_primary"/>
                <CustomButton text ="Resend Code" onPress={onResendCode} type="container_secondary" />
                <CustomButton text="Back to Sign In" onPress={onBackToSignIn} type="TERTIARY"/>
            
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
export default ConfirmEmailScreen