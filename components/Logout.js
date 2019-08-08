import React, { Component } from 'react';
import { Text, View } from 'react-native';
import fire from '../firebase/fbConfig';

export default class Logout extends Component {
  componentWillMount() {
    fire
      .auth()
      .signOut()
      .then(console.log('Logged Out!'));
    this.props.navigation.navigate('Login');
  }

  render() {
    return <View />;
  }
}
