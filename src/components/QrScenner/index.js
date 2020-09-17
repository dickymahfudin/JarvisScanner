import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import QRScenner from 'react-native-qrcode-scanner';
import {IdConsumer} from '../../Context';

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
  const [state, setstate] = useState({qr: '', id: ''});
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
        setstate({...state, id: json.result.id});

        let urlOdoo = `http://192.168.2.8:8069/web#id=${json.result.id}&action=185&model=product.template&view_type=form&menu_id=84`;
        console.log(urlOdoo);
        contex.changeId(urlOdoo);
        navigation.navigate('Odoo');
      })
      .catch((er) => console.log(er));
    setstate({...state, qr: e.data});
  };

  return (
    <>
      <QRScenner
        containerStyle={styles.container}
        onRead={ifScaned}
        reactivate={true}
        permissionDialogMessage="Need Permission To Access Camera"
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
