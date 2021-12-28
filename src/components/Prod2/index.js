import React, {useState, useCallback} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function Prod2(){
    return(
        <Animatable.View 
        style={styles.container} 
        animation="bounceIn"
        useNativeDriver
        >
            
        </Animatable.View>
    )
}

const styles = StyleSheet.create({ 
    container: {
       flex: 1,
       margin: 8,
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: '#FFF',
       borderRadius: 5,
       padding: 7,
       elevation: 1.5,
       shadowColor: '#000',
       shadowOpacity: 0.2,
       shadowOffset:{
           width: 1,
           height: 3,
       } 
    },
    task:{
        color: '#121212',
        fontSize: 20,
        paddingLeft: 8,
        paddingRight: 20,
    }
});