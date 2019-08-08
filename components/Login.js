import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';
import fire from '../firebase/fbConfig';

export default class Landing extends Component {
  state = {
    userName: '',
    password: '',
    user: {}
  };

  componentWillMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        this.props.navigation.navigate('Home');
      } else {
        console.log('Not Signed In!');
      }
    });
  }

  login = e => {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.userName, this.state.password)
      .then(console.log('Signing In!'))
      .catch(err => {
        console.log(err);
        alert('Invalid Username or Password!');
      });
  };

  render() {
    return (
      <View style={[styles.container, styles.column]}>
        <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../assets/images/hpa-logo.png')}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.textInputContainer}>
            <Icon
              style={styles.userIcon}
              name="ios-person"
              color="#D3D3D3"
              size={30}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ userName: text })}
              value={this.state.userName}
              placeholder="User Name"
            />
          </View>
          <View style={styles.textInputContainer}>
            <Icon
              style={styles.passIcon}
              name="ios-lock"
              color="#D3D3D3"
              size={30}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
              placeholder="Password"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.login()}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FDFDFD'
  },
  logo: {
    height: 300,
    width: 300,
    top: 150,
    left: 40,
    position: 'absolute'
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: '20%',
    width: '100%',
    backgroundColor: '#000'
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'ProximaNova-Light',
    color: '#FFF'
  },
  column: {
    flexDirection: 'column'
  },
  userIcon: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 10
  },
  passIcon: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 10
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    width: '90%',
    borderRadius: 5,
    margin: 10
  },
  textInput: {
    flex: 1,
    fontFamily: 'ProximaNova-Light',
    height: '100%'
  }
});
