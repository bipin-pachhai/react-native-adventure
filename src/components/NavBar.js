import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const NavBar = (props) => {
    return <View style = {styles.row}>
        <TouchableOpacity onPress={() => {props.navigation.navigate("Home")}}>
            <Text style={styles.text}>ROSTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {props.navigation.navigate("Adventure")}}>
            <Text style = {styles.text}>ADVENTURE</Text>
        </TouchableOpacity>

    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderWidth: 1,
        backgroundColor:'black',

    },
    text:{
        fontFamily:'Cochin',
        fontWeight:'bold',
        color:'white',
        margin:10,
        fontSize:15,
    }
    
})

export default withNavigation(NavBar);