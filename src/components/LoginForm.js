import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        emailInput: ''
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
            <CardSection />
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
