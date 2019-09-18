import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import {styles} from './userMenuStyles';
import { ListItem, Avatar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import NavigationService from '../services/navigation';


const list = [
    {
        name: 'Profile',
        icon: 'user-circle',
        type: 'font-awesome',
        subtitle:'Name, Address....',
        route:'Profile'
    },
    {
        name: 'Orders',
        icon:'shopping-cart',
        type: 'font-awesome',
        route:'Orders'
    },
    {
        name: 'Wishlist',
        icon:'list',
        type: 'font-awesome',
        route:'Wishlist'
    },
    // {
    //     name:'Logout',
    //     icon:'sign-out',
    //     type:'font-awesome',
        
    // }
]

export class UserScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uid:'',
            userInfo:{}
        }
    }

    componentDidMount(){
        let uid = this.props.navigation.getParam('uid')
        firestore().collection('users').doc(uid)
        .get().then(res=>{
            this.setState({userInfo:res.data(),uid:uid})
        })
    }

    logOut = ()=>{
        auth().signOut()
        .then(()=>NavigationService.navigate('Home'))
        .catch(error=>NavigationService.navigate('Home'))
    }

    render(){
        const { navigation } = this.props;

        const avatarIcon = (
            this.state.userInfo.photoURL ?  <Avatar 
            rounded
            size={200}
            source={{uri:this.state.userInfo.photoURL}}
            onPress={()=>console.log('works')}
            showEditButton                 
        /> : <Avatar 
                rounded
                size={200}
                source={require('../../assets/userIcon.png')}
                onPress={()=>console.log('works')}
                showEditButton                 
                />
        ) 

        return (
            <View style={styles.container}>
                <View style={styles.userIconContainer}>
                    {avatarIcon}
                    <Text>{JSON.stringify(this.state.userInfo)}</Text>
                </View>
                <View style={styles.menuContainer}>
                    {
                        list.map((doc, i)=>(
                            <ListItem
                                key={i}
                                title={doc.name}
                                leftIcon={{name:doc.icon, type:doc.type}}
                                subtitle={doc.subtitle ? doc.subtitle : null}
                                bottomDivider
                                chevron
                                onPress={()=>NavigationService.navigate(doc.route,{uid:this.state.uid})}
                            />
                        ))
                    }
                    <ListItem 
                        title="Logout"
                        leftIcon={{name:'sign-out', type:'font-awesome'}}
                        bottomDivider
                        chevron
                        onPress={()=>this.logOut()}
                    />
                </View>
            </View>
        )
    }
}
