import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider as GameProvider} from "./src/context/heroContext";


//import screens
import HeroDetailScreen from './src/screens/HeroDetail';
import RoasterScreen from './src/screens/Roster';
import AdventureScreen from './src/screens/Adventure';
import ResultScreen from './src/screens/Result';



const navigator = createStackNavigator(
  {
    Home: RoasterScreen,
    HeroDetail: HeroDetailScreen,
    Adventure: AdventureScreen,
    AdResult : ResultScreen,
  },

  {
    initialRouteName:"Home",
    defaultNavigationOptions:{
      title:"App"
    }
  }
);

const App =  createAppContainer(navigator);

export default ()=>{
  return <GameProvider>
           <App/>
        </GameProvider>
}