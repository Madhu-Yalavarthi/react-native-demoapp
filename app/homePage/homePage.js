import React from 'react';
import { View, Text, Button, Image, } from 'react-native';
import {Icon,Header} from 'react-native-elements';
import {styles} from './homePageStyles';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
//import firebaseApp from '../../Firebase';
// import { Navbar } from '../navbar/navbar';
// headerLeft: <AppMenu navigation={navigation}></AppMenu> ,
// headerRight: <UserIcon navigation={navigation}></UserIcon>,
// headerStyle:{
//   backgroundColor:'#f4511e',
// },
// headerTintColor:'#fff',
// headerTitleStyle:{
//   fontWeight:'bold', 
// },



export class HomeScreen extends React.Component {
    constructor(props){
      super(props);
      this.state={
        slides:[]
      };
    }

    _renderItem = ({item,index})=>{
      return (
        <View style={{height:200}}>
          <Image source={{uri:item}} style={styles.slide} />
        </View>
      )
    }

    // static navigationOptions = ({ navigation }) => {
    //   const params = navigation.state.params || {};
      
    //   return {
      //   drawerLabel: 'Home',
      //   drawerIcon: ({ tintColor }) => (
      //     <Icon name="home" type="font-awesome" style={[styles.userIcon, { tintColor: tintColor }]}></Icon>
      //   ),
      // };
    // };

    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" type="font-awesome" style={[styles.userIcon, { tintColor: tintColor }]}></Icon>
      ),
    }

    componentWillMount(){ 
      this.getSlides()
      .then(snap=>{
        this.setState({slides:snap.docs.map(doc=>doc.get('url'))})
      })
      .catch(error=>console.warn(error))
      

    }

    getSlides = async()=>{
      return await firestore()
      .collection('webpage/homepage/slides')
      .get();
    };

   

    render(){
      const slides = this.state.slides.map(doc=>(
        <View key={doc} style={{height:150}}>
          <Image source={{uri:doc}} style={styles.slide} />
        </View>
        
      ))
      return (
        <ScrollView>
          <View style={styles.homePage}>
            <Text>Home Screen</Text>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.slides}
              renderItem={this._renderItem}
              sliderWidth={400}
              itemWidth={400}
            />
            {/* <View style={{display:'flex', flexDirection:'column'}}>
              {slides}
            </View> */}
            <Button title="Go to details" onPress={()=>this.props.navigation.navigate('Details',{
              name:'MadhuJohn',
              itemName:'BRUH',
              itemId:321
            })}></Button>
            <Button title="Login/signup" onPress={()=>this.props.navigation.navigate('LoginSignup')}></Button>
          </View>
        </ScrollView>
        
      );
    }
}