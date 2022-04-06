import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/logo.png';
import CustomIn from '../../components/CustomInputs/CustomIn';
import CustomButton from '../../components/CustomButton';

const ConfirmResetScreen = () => {
    const [Code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onConfirmPressed = () => {
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
                    placeholder="Code"
                    value = {Code} 
                    setValue={setCode}
                />
                <CustomIn
                    placeholder="New Passoword"
                    value = {newPassword}
                    setValue = {setNewPassword}
                />
                <CustomButton text="CONFIRM" onPress={onConfirmPressed} type = "container_primary"/>
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
export default ConfirmResetScreen