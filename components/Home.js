import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View style={[styles.container]}>
				<View style={styles.container}>
					<Image
						style={styles.logo}
						source={require('../assets/images/hpa-logo.png')}
					/>
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
	bgImg: {
		flex: 1
	},
	whiteFade: {
		backgroundColor: 'rgba(255,255,255,0.25)'
	},
	logo: {
		height: 300,
		width: 300,
		top: 150,
		left: 40,
		position: 'absolute'
	},
	row: {
		flexDirection: 'row'
	},
	column: {
		flexDirection: 'column'
	},
	loginButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 20,
		height: '20%',
		width: '90%',
		borderRadius: 4,
		borderWidth: 3.0,
		borderColor: '#000'
	},
	loginText: {
		fontSize: 20,
		fontFamily: 'ProximaNova-Light'
	}
});
