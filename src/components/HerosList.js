import React,{useContext, useState} from "react";
import {View,Text,StyleSheet,FlatList, ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';
import {Context as HeroContext}  from '../context/heroContext';
import ItemData from "./ItemData";

const HeroList = (props) => {
    const {state, deleteHero} = useContext(HeroContext);
    const adventureDetail = props.adventure;

    return(
    <ScrollView style ={styles.scrollview}>
        <Text style ={styles.text}>Availabe Heroes for the Adventure:</Text>
        <View style={styles.container}>
        <FlatList
            data = {state}
            keyExtractor ={(heroes) => {return heroes.id}}
            renderItem = { ({item}) =>{
                return <ItemData item = {item} adventure={adventureDetail}/>
            }}
           
        />
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview:{
        maxHeight:300,

    },

    container: {
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text:{
        textAlign:'left',
        padding:15,
        fontSize: 15,
        color:'blue'
    }
});
export default withNavigation(HeroList);