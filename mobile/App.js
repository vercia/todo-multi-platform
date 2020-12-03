import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from './Home';
import CalendarScreen from './Calendar';
import SettingsScreen from './Settings';
import AppContextProvider from './context';

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeScreen,
    Calendar: CalendarScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: 'Home',
    barStyle: { backgroundColor: '#56F2F8' }
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  );
};

StatusBar.setHidden(true);

export default App;
