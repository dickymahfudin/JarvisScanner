import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return <WebView source={{uri: 'https://reactnative.dev/'}} />;
};

export default App;

const styles = StyleSheet.create({});
