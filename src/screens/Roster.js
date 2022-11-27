import React,{useContext} from "react";
import { Text, StyleSheet, View, TouchableOpacity,SafeAreaView,StatusBar  } from 'react-native';
import HerosList from '../components/HerosList';
import NavBar from '../components/NavBar';
import {Context as HeroContext}  from '../context/heroContext';

const RoasterScreen = (props)=>{
    const {state, addHero} = useContext(HeroContext);
    return(
    <View>
      
        <Text style={styles.text}>Welcome to the Real Adventure</Text>
        <SafeAreaView  style={styles.scrollview}>
        <HerosList></HerosList>
        </SafeAreaView >

        <View style ={styles.buttonview}>
        <TouchableOpacity style={styles.button} onPress={() => {addHero()}}>
            <Text style={styles.buttonText}>Hire New Hero</Text>
        </TouchableOpacity>
        </View>
        <NavBar/>
    </View>

    
    );
}
const styles = StyleSheet.create({
    scrollview:{
        paddingTop: StatusBar.currentHeight,
        marginBottom:150,
        minHeight:400,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderWidth: 1,
    },
    buttonview:{
        flexDirection:'column',
        marginLeft: 40,
        marginRight:40,
        padding: 15,
        justifyContent: 'center'

    },
    text: {
            padding:10,
            margin:10,
            textAlign:'center',
            fontSize: 20,
            color:' #004080'
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    button:{
        padding: 30,
        alignItems: "center",
        backgroundColor: '#008CBA',
        color:"white",
        justifyContent: "center",
    }
});

export default RoasterScreen;
