import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/logo.png';
import CustomIn from '../../components/CustomInputs/CustomIn';
import CustomButton from '../../components/CustomButton';
import { SafeAreaView, TextInput } from "react-native";
  
const ReviewScreen = () => {
    const [Confirmation, setConfirmation] = useState('');

    const onReviewSubmitted = () => {
        console.warn("Submit")
    }
    const onCancelReview= () => {
        console.warn("Cancel")
    }
    const onReturnToMain = () => {
        console.warn("Return to Main")
    }
    return (
        <ScrollView>
            <View style={s.root}>
                <Text style={s.title}>Write A Review</Text>
                <CustomIn 
                    placeholder="Type Review Here..."
                    value = {Confirmation} 
                    setValue={setConfirmation}
                    
                />
                <CustomButton text="Submit" onPress={onReviewSubmitted} type = "container_primary"/>
                <CustomButton text ="Cancel" onPress={onCancelReview} type="container_secondary" />
                <CustomButton text="Return to Main" onPress={onReturnToMain} type="TERTIARY"/>
            
            </View>
        </ScrollView>
    );
};

const s = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 25,
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
        height: 4000,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        
    },
    hyper:{
        color: '#FFC0CB',
    }

});
export default ReviewScreen 