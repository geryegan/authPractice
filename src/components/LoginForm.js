import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        emailInput: '',
        password: ''
    };

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
            <CardSection>
                <Button>
                    Log In
                </Button>
            </CardSection>
            </Card>
        );
    }
}


export default LoginForm;
