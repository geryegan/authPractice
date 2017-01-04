import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBG8fLlK4HmOoNmgwOihYLb88WlRxBTUoo',
            authDomain: 'auth-2038e.firebaseapp.com',
            databaseURL: 'https://auth-2038e.firebaseio.com',
            storageBucket: 'auth-2038e.appspot.com',
            messagingSenderId: '915506453570'
    });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    onLogoutPress() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: return (
                <CardSection>
                    <Button onPress={this.onLogoutPress.bind(this)}>
                        Log Out
                    </Button>
                </CardSection>
            );
            case false: return (
                <LoginForm />
            );
            default: return (
                <CardSection>
                <Spinner size={'large'} />
            </CardSection>
            );
        }
        // if (this.state.loggedIn) {
        //     return (
        //         <CardSection>
        //             <Button onPress={this.onLogoutPress.bind(this)}>
        //                 Log Out
        //             </Button>
        //         </CardSection>
        //     );
        // } return (
        //     <LoginForm />
        // );
    }

    render() {
        return (
            <View>
                <Header text="Authentication!" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
