import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/logo.png';
import CustomIn from '../../components/CustomInputs/CustomIn';
import CustomButton from '../../components/CustomButton';

const ResetPasswordScreen = () => {
    const [Email, setEmail] = useState('');

    const onSendPressed = () => {
        console.warn("Confirm")
    }
    const onBackToSignIn = () => {
        console.warn("Back to Sign In")
    }
    return (
        <ScrollView>
            <View style={s.root}>
                <Text style={s.title}>Reset Your Password</Text>
                <CustomIn 
                    placeholder="Enter your Email"
                    value = {Email} 
                    setValue={setEmail}
                />
                <CustomButton text="SEND" onPress={onSendPressed} type = "container_primary"/>
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
export default ResetPasswordScreen