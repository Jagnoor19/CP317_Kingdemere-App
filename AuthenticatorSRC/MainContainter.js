import React from 'react'
import {View, Text} from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens - We can add more screens later
import HomeScreen from './screens/HomeScreen'


//Screen names 
const HomeScreen = 'Home';


const Tab = creatBottomTabnavigator();

export default function mainContainer(){
    return(
        <NavigationContainer>
            <Tab.navigtor>
            initialRouteName={homeName}
            screenOptions={({route})=> ({
                tabBarIcon: ({focused, color,size})=>{
                    let iconName;
                    let routeN = route.name;

                    if(routeN === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    return <Ionicons name={iconeName} size={size} color={color}/>
                },
            })}

            <Tab.Screen name={homeName} component={HomeScreen}/>

            </Tab.navigtor>
        </NavigationContainer>
    );
};

