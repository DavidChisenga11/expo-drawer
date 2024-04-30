import { View, Text } from 'react-native'
import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function _layout(){
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle:{
                height: 80,
                // backgroundColor: 'gray'
            },
            tabBarLabelStyle:{
                marginBottom: 10,
                // color: 'purple'
            }
            

        }}>
            <Tabs.Screen
                name='settings'
                options={{
                    tabBarIcon: ({focused,size, color})=>(
                        <Ionicons name='settings' size={40} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name='notifications'
                options={{
                    tabBarIcon: ({size, color})=>(
                        <Ionicons name='notifications' size={40} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}