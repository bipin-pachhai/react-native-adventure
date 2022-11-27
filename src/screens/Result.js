import React, {useContext, useState, useEffect} from 'react';
import { Text, StyleSheet, View, Butto, Pressable } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Context as HeroContext} from "../context/heroContext";
import {checkWinner} from "../utils/winnerLogic";



const ResultScreen = (props)=>{
    const {state, updateHero} = useContext(HeroContext);
    const currHeroId = props.navigation.getParam("id");
    let currHero = state.find(hero => {return currHeroId == hero.id});
    const currAdventure  = props.navigation.getParam("adventureDetail");
    const [feedback, setFeedback] = useState({});
   // const [currHero, setCurrHero] = useState(curr_Hero);

    useEffect(() => {
        playAdventure();
    }, []);

    const playAdventure=  ()=>{
        
        var hpDiff = parseInt(currHero.currentHP) - parseInt(currAdventure.demonHP);
        var heroHP =  (hpDiff > 0) ? hpDiff : 0;
        currHero.currentHP = heroHP;
        updateHero(currHero, ()=>{});
        console.log(currHero);
        console.log(heroHP);
        setFeedback(checkWinner(currHero, currAdventure, heroHP));
    }

    return (
        <View >
            <View style ={styles.mainview}>
            <Text style ={styles.title}> RESULT</Text>
            <Text style ={styles.resultext}>{feedback.comment}</Text>
            <Text style ={styles.resultext}>Hints:   {feedback.feedback}</Text>
            </View>
            <View style ={styles.buttonview}>
                {
               feedback.status 
                ?
                <View>
                    <Pressable style = {styles.playbutton} onPress={()=> props.navigation.navigate("Home")}>
                        <Text style ={styles.text}>
                            Play Again!
                        </Text>
                    </Pressable>
                </View>
                :
                <View>
                <Pressable style = {styles.upgradebutton} onPress={()=> props.navigation.navigate("HeroDetail", {id : currHeroId})}>
                <Text style ={styles.text}>
                Upgrade Your Hero!
                </Text>
                </Pressable>
                </View>
                }

            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    mainview:{
        flexDirection:'column',
        margin: 10,
        marginBottom:250,
        padding: 10,
        maxHeight: 500,
        justifyContent: 'center'
    },
    buttonview:{
        flexDirection:'column',
        margin: 60,
        padding: 15,
        justifyContent: 'center'

    },
    playButton:{
        backgroundColor: '#1aff1a',
        flex:1,

    },
    upgradebutton:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#4d94ff',

    },
    playbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1aff1a',
      },

      resultext
      : {
        justifyContent: 'center',
        fontSize: 16,
        lineHeight: 21,
        padding: 15,
        fontWeight: 'bold',
        letterSpacing: 0.25,
      },
      title:{
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 18,
        marginButtom: 15,
        padding:14,
        marginLeft:60,
        width: 200,


      }
});


export default withNavigation(ResultScreen);