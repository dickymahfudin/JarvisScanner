import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';

const WebOdoo = () => {
  const renderLoading = () => (
    <ActivityIndicator animating color="red" size="large" />
  );

  return (
    <WebView
      startInLoadingState={true}
      renderLoading={renderLoading}
      source={{uri: 'https://reactnative.dev/'}}
    />
  );
};

export default WebOdoo;

const styles = StyleSheet.create({});
