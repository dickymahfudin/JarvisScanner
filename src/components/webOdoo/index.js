import React from 'react';
import {ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';
import CookieManager from '@react-native-community/cookies';

const WebOdoo = ({url}) => {
  const renderLoading = () => (
    <ActivityIndicator animating color="red" size="large" />
  );

  return (
    <>
      <WebView
        startInLoadingState={true}
        renderLoading={renderLoading}
        source={{uri: url}}
        cacheEnabled={true}
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
