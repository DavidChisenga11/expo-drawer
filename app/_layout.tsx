import { View, Text } from 'react-native'
import React from 'react';
import {Drawer} from 'expo-router/drawer'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function _layout(){
    return(
        <Drawer
            screenOptions={{
                drawerLabelStyle:{
                    marginLeft: -20
                }
            }}
        >
             <Drawer.Screen 
                name='home'
                options={{
                    drawerLabel: 'Home',
                    headerTitleAlign: 'center',
                    title: 'Home',
                    drawerIcon: ({size, color})=>(
                        <Ionicons name='md-home' size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen 
                name='index'
                options={{
                    drawerLabel: 'About',
                    title: 'About',
                    headerTitleAlign: 'center',
                    drawerIcon: ({size, color})=>(
                        <Ionicons name='ios-information-circle' size={size} color={color} />
                    ),
                    
                }}
            />
          
           
        </Drawer> 
    )
}