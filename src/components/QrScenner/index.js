import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import QRScenner from 'react-native-qrcode-scanner';
import {IdConsumer} from '../../Context';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    // marginBottom: '130%',
    // height: '50%',
  },
  marker: {
    borderColor: '#FFF',
    borderRadius: 10,
    height: 200,
    width: 200,
    justifyContent: 'center',
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
  cameraStyle: {
    height: '50%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

const QRscanner = ({navigation}) => {
  const [state, setstate] = useState({qr: 'JARVIS SCANNER'});
  let contex = IdConsumer._currentValue;

  const ifScaned = (e) => {
    let url = 'http://192.168.2.8:8069/api/product/';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        params: {barcode: e.data},
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        let id = json.result.id;
        console.log(id);
        if (id) {
          let urlOdoo = `http://192.168.2.8:8069/web#id=${json.result.id}&action=185&model=product.template&view_type=form&menu_id=84`;
          contex.changeId(urlOdoo);
          navigation.navigate('Odoo');
          return setstate({...state, qr: id});
        }
        return setstate({...state, qr: 'Upps, Qr Code Salah'});
      })
      .catch((er) => {
        setstate({...state, qr: 'Server Error Hubungi Admin'});
      });
  };

  return (
    <>
      <QRScenner
        containerStyle={styles.container}
        onRead={ifScaned}
        reactivate={true}
        permissionDialogMessage="Need Permission To Access Camera"
        showMarker={true}
        markerStyle={styles.marker}
        cameraStyle={styles.cameraStyle}
      />
      <Text style={styles.TextResult}>{state.qr}</Text>
    </>
  );
};

export default QRscanner;
