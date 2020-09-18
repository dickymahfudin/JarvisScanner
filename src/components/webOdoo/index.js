import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import WebView from 'react-native-webview';
import CookieManager from '@react-native-community/cookies';
import {IdConsumer} from '../../Context';

const WebOdoo = ({url}) => {
  let contex = IdConsumer._currentValue;
  const [state, setState] = useState(contex.id);
  const renderLoading = () => (
    <ActivityIndicator animating color="red" size="large" />
  );

  return (
    <>
      <WebView
        startInLoadingState={true}
        renderLoading={renderLoading}
        source={{uri: url}}
        renderError={(errorName) => console.log('ERROR', errorName)}
        onError={(syntheticEvent) => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </>
  );
};

export default WebOdoo;

const styles = StyleSheet.create({});
