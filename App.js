/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tabs } from './Tabs/tabs';

const StackNavigation = StackNavigator(
  {
    Tabs: { screen: Tabs }
  },
  { initialRouteName: "Tabs" }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <StackNavigation/>
  }
}


