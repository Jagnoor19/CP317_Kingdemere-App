import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/logo.png';
import CustomIn from '../../components/CustomInputs/CustomIn';
import CustomButton from '../../components/CustomButton';
import { Agenda } from 'react-native-calendars'

const timeToString = (time) =>{
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}
const CalendarScreen = () => {
    const [items, setItems] = useState({});

    
    const loadItems = (day) => {
        setTimeout(() => {
            for(let i = -15; i < 85; i++){
                const t = day.timestamp + i * 24 * 60 *60*1000;
                const strT = timeToString(t);
                if(!items[strT]){
                    items[strT] = [];
                    const numI = Math.floor(Math.random() *3 +1);
                    for(let j = 0; j<numI; j++){
                        items[strT].push({
                            name: 'Item for ' + strT + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)) 
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) =>{
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }
    return(
    <View style={{flex: 1}}>
        <Agenda 
        items={items}
        loaditemsForMonth={loadItems}
        selected={'2017-05-16'}

        />
    </View>
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
export default CalendarScreen