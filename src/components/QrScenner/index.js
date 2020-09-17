import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import QRScenner from 'react-native-qrcode-scanner';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginBottom: '50%',
  },
  content: {
    borderColor: '#FFF',
    borderRadius: 10,
  },
  Text: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  TextResult: {
    fontSize: 30,
    color: 'rgb(0,122,255)',
    textAlign: 'center',
  },
});

const QRscanner = ({navigation}) => {
  const [state, setstate] = useState({qr: 'Dism'});

  const ifScaned = (e) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
    setstate({qr: e.data});
    navigation.navigate('Odoo');
  };

  return (
    <>
      <QRScenner
        containerStyle={styles.container}
        onRead={ifScaned}
        reactivate={true}
        permissionDialogMessage="Need Permission To Access Camera"
        reactivateTimeout={60}
        showMarker={true}
        markerStyle={styles.content}
        bottomContent={
          <TouchableOpacity>
            <Text style={styles.Text}>Scan QR</Text>
          </TouchableOpacity>
        }
      />
      <Text style={styles.TextResult}>{state.qr}</Text>
    </>
  );
};

export default QRscanner;
