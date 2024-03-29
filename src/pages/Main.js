import React, { Component } from 'react';
import { View, Image, AsyncStorage, } from 'react-native';
import Nav from '../components/Nav';
import { Container, Header, Content, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class Main extends Component {

    componentDidMount = () => {
        console.log('sup');
        this._retrieveData();
    }

    _retrieveData = async () => {
        console.log('hello');
        try {

            const value = await AsyncStorage.getItem('token');

            if (value !== null) {
                // We have data!!
                console.log('user saved locally');
                console.log(value);
                Actions.dashboard();

            } else {

                console.log('no data');

            }

        } catch (error) {
            // Error retrieving data
        }
    };




    render() {

        return (
            <LinearGradient
                colors={['#42AAD8', '#A8D7F7']}
                style={styles.container}>
                <View style={{ flex: 1, height: "100%", alignItems: 'center', justifyContent: 'center' }}>
                    
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../images/icebreakr-logo-300.png')} style={{ borderRadius: 18 }} />
                    </View>
                    
                    <Text style={styles.thisIsAStyle}> Sign up and start chatting</Text>

                    <Button style={styles.button}><Text style={{ fontSize: 15, color: 'black' }} onPress={() => Actions.login()}>Login</Text></Button>
                    <Text style={{ fontFamily: 'Roboto Regular', color: 'white' }} onPress={() => Actions.signup()}>or Signup with Email</Text>
                </View>

            </LinearGradient>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontFamily: 'Roboto Bold',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 25
    },
    button: {
        fontFamily: 'Roboto Bold',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginBottom: 25,
        borderRadius: 15,
        height: 55,
        width: 150,
        justifyContent: 'space-around'

    },
    container: {
        flex: 1,
        flexDirection: 'column'
    }
};

