import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress, text, type = "container_primary", second}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, styles[type]]}>
            <Text styles={[styles.text, styles[second]]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_primary: {
        backgroundColor: '#3B71F3',
    },
    container_secondary: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },
    container_TERTIARY: {

    },
    text: {
        fontWeight: 'bold',
        color: '#fff',
    },
    text_TERRTIARY: {

    }
})
export default CustomButton