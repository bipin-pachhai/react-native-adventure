import React, {useContext, useEffect, useState} from 'react';
import { Text, StyleSheet, View, SafeAreaView,StatusBar } from 'react-native';
import { generateAdventure } from '../utils/generator';
import HerosList from '../components/HerosList';
import { withNavigation } from 'react-navigation';


const AdventureScreen = ()=>{

  const adventure = generateAdventure();

    
    return(
    <View>
        <Text style={styles.title}>
          **********************************
        </Text>
        <View style ={styles.mainview}>
        <Text style= {styles.title}>Current Adventure</Text>
        <Text style= {styles.resultext}>{adventure.name}</Text>
        <Text style= {styles.resultext}> Challenge Level: {adventure.challengeLevel}</Text>
        <Text style= {styles.resultext}>Who do you send?</Text>
        </View>
        <SafeAreaView  style={styles.scrollview}>
        <HerosList adventure = {adventure} ></HerosList>
        </SafeAreaView>
    </View>
    );

}

const styles = StyleSheet.create({
    mainview:{
        flexDirection:'column',
        margin: 10,
        padding: 10,
        maxHeight: 500,
        justifyContent: 'center'
    },
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
    text: {
        fontSize:10
    },
    
    title: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        margin:10,
    },
    resultext : {
      justifyContent: 'center',
      fontSize: 16,
      lineHeight: 21,
      padding: 15,
      fontWeight: 'bold',
      letterSpacing: 0.25,
    },
});

export default withNavigation(AdventureScreen);