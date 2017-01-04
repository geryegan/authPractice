import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
        emailInput: '',
        password: '',
        error: '',
        loading: false,
        success: ''
    };

    onButtonPress() {
        this.setState({ loading: true });
        //Deconstruct email and password properties from state
        const { emailInput, password } = this.state;
        //Clear auth error on new button press if there
        this.setState({ 
            error: '',
            loading: true,
            success: ''
        });
        //Attempt to login with values from state
        firebase.auth().signInWithEmailAndPassword(emailInput, password)
         //Login succeeds, invoke login success helper
         .then(this.onLoginSuccess.bind(this))
         //Login fails, attempt to create account with provided information
         .catch(() => {
             firebase.auth().createUserWithEmailAndPassword(emailInput, password)
                //account creation succeeds
                .then(this.onLoginSuccess.bind(this))
                //Account create fails, show user error
                .catch(this.onLoginFail.bind(this));
         });
    }
    
    onLoginSuccess() {
        this.setState({
            emailInput: '',
            password: '',
            error: '',
            loading: false,
            success: 'Logged in!'
        });
    }
    onLoginFail() {
        this.setState({
            emailInput: '',
            password: '',
            error: 'Login failed',
            loading: false,
            success: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
            <CardSection>
                <Input
                    placeholder="user@email.com"
                    label="Email"
                    value={this.state.emailInput}
                    onChangeText={emailInput => this.setState({ emailInput })}
                />
            </CardSection>
            <CardSection>
                <Input
                    secureTextEntry
                    placeholder="password"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
            </CardSection>
            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>
            <Text style={styles.successTextStyle}>
                {this.state.success}
            </Text>
            <CardSection>
                {this.renderButton()}
            </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    successTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'green'
    }
};


export default LoginForm;
