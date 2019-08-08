import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Login from './components/Login';
import Logout from './components/Logout';
import Showroom from './components/Showroom';
import Dashboard from './components/Dashboard';
import Estimator from './components/Estimator';
import Support from './components/Support';
import PDF from './components/PDF';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const ShowroomNavigator = createStackNavigator(
  {
    Showroom: {
      screen: Showroom,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 20 }}
              name="md-menu"
              color="#FFF"
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitle: 'Showroom'
        };
      }
    },
    PDF: {
      screen: PDF,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 20 }}
              name="md-arrow-back"
              color="#FFF"
              size={30}
              onPress={() => navigation.navigate('Showroom')}
            />
          ),
          headerTitle: 'Showroom'
        };
      }
    }
  },
  {
    initialRouteName: 'Showroom',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const DashboardNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 20 }}
            name="md-menu"
            color="#FFF"
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerTitle: 'Dashboard',
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      };
    }
  }
});

const EstimatorNavigator = createStackNavigator({
  Estimator: {
    screen: Estimator,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 20 }}
            name="md-menu"
            color="#FFF"
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerTitle: 'Estimator',
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      };
    }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Showroom: {
      screen: ShowroomNavigator,
      navigationOptions: {
        tabBarLabel: 'Showroom',
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={{ paddingTop: '20%' }}
            name="md-easel"
            color={tintColor}
            size={25}
          />
        )
      }
    },
    Dashboard: {
      screen: DashboardNavigator,
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={{ paddingTop: '20%' }}
            name="ios-speedometer"
            color={tintColor}
            size={25}
          />
        )
      }
    },
    Estimator: {
      screen: EstimatorNavigator,
      navigationOptions: {
        tabBarLabel: 'Estimator',
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon
            style={{ paddingTop: '20%' }}
            name="ios-calculator"
            color={tintColor}
            size={25}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Dashboard',
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#000'
    }
  }
);

// const StackNavigator = createStackNavigator(
//   {
//     TabNavigator: TabNavigator
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerLeft: (
//           <Icon
//             style={{ paddingLeft: 20 }}
//             name="md-menu"
//             color="#FFF"
//             size={30}
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//         headerStyle: {
//           backgroundColor: '#000'
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         }
//       };
//     }
//   }
// );

const DrawerNavigator = createDrawerNavigator({
  Dashboard: { screen: TabNavigator },
  Support: { screen: Support },
  Logout: { screen: Logout }
});

const LoginNavigator = createStackNavigator(
  {
    Login: Login,
    Home: DrawerNavigator
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(LoginNavigator);

export default AppContainer;
