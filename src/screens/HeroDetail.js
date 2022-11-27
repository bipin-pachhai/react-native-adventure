import React, {useContext, useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import {Context as HeroContext} from "../context/heroContext";

const HeroDetailScreen = (props)=>{
    const {state, updateHero} = useContext(HeroContext);
    const currHeroId = props.navigation.getParam("id");
    let currHero = state.find(hero => {return currHeroId == hero.id});
    const [hero, setHero] = useState(currHero);
    const [levelup, setLevelup] = useState("Level Up");
    
   // console.log(hero);
   const handleUpdate = ()=>{
        if(parseInt(hero.gold) > 0){
            setHero({
                id:hero.id,
                level:hero.level+1,
                maxHP:hero.maxHP+5,
                currentHP:hero.currentHP+5,
                power:hero.power + Math.floor((Math.random()*5) +2),
                name:hero.name,
                gold:hero.gold - (10*hero.level)
            });
            setLevelup("Level Up "+hero.level*10 + " GOLDS");
     }
  }

    return (
    <View>
        <Text style ={styles.title}>
         ******Hero Details******
        </Text>
        <View style ={styles.statview}>
        <Text style ={styles.name}>{hero.name}</Text>
        <Text style ={styles.name}> Level: {hero.level}</Text>
        <Text style ={styles.name}> Health: {hero.currentHP}/{hero.maxHP}</Text>
        <Text style ={styles.name}> Gold: {hero.gold}</Text>
        <Text style ={styles.name}> Power: {hero.power}</Text>
        </View>

        <View style= {styles.buttonview}>
        <TouchableOpacity style={styles.button} onPress={() => {handleUpdate()}}>
            <Text>{levelup}</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}  onPress={() =>{ updateHero(hero, ()=>{props.navigation.navigate("Home")})} }>
            <Text>Save Changes</Text>
        </TouchableOpacity>
        </View>

         <NavBar/> 
       
    </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        margin:10,
    },
    name: {
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        margin:10,
    },
    statview:{
        marginBottom:150,
        minHeight:400,
        maxHeight:450,

    },
    buttonview:{
        maxHeight:200,
        marginLeft:30,
        marginRight:30,
        margin:10,
        
    },
    button:{
        margin:10,
        padding: 10,
        alignItems: "center",
        backgroundColor: '#008CBA',
        color:"white",
        justifyContent: "center",
    }
});
export default HeroDetailScreen;