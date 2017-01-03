import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
        apiKey: 'AIzaSyBG8fLlK4HmOoNmgwOihYLb88WlRxBTUoo',
        authDomain: 'auth-2038e.firebaseapp.com',
        databaseURL: 'https://auth-2038e.firebaseio.com',
        storageBucket: 'auth-2038e.appspot.com',
        messagingSenderId: '915506453570'
  });
 }

    render() {
        return (
            <View>
                <Header text="Authentication!" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
