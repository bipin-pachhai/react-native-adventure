import React,{useContext, useState} from "react";
import {View,Text,StyleSheet, Animated} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { Context as HeroContext } from "../context/heroContext";
  
const ItemData = (props)=>{

    const item = props.item;
    const adventureDetail = props.adventure;
    const {deleteHero} = useContext(HeroContext);

    const deleteItem = ()=>{
       // console.log(item);
        deleteHero(item.id);

    };

    const renderRightActions = (progress,dragX) => {
        const opacity = dragX.interpolate({
          inputRange: [-100, 0],
          outputRange: [0.7, 0],
          extrapolate: 'clamp',
        });
      
        return (
          <View style={styles.row}>
            <Animated.View style={[styles.deleteButton, {opacity}]}>
              <TouchableOpacity onPress={deleteItem}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        );
    };  

  ///
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <View style= {styles.row} >
    <TouchableOpacity onPress = { () => {!adventureDetail ?
        props.navigation.navigate("HeroDetail",{id:item.id}) : props.navigation.navigate("AdResult", {id:item.id, adventureDetail : adventureDetail})}}> 
         <Text style={styles.text} >Name: {item.name}, Level: {item.level}, Health: {item.currentHP}/{item.maxHP}, Power: {item.power}/{item.power} --- Gold: {item.gold}</Text>
      </TouchableOpacity>           
    </View>
    </Swipeable>  
);

}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    row: {
        minHeight: 50,
        padding:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderWidth: 1,
        marginBottom:5,
        backgroundColor: '#efefef',
    },
    text: {
        fontSize:10
    },
      swipedConfirmationContainer: {
        flex: 1,
      },
      deleteButton: {
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      },
      deleteButtonText: {
        color: '#fcfcfc',
        fontWeight: 'bold',
        padding: 3,
      },

});

export default withNavigation(ItemData);