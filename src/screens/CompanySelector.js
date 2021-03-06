import React from 'react';
import {StyleSheet, Text, SafeAreaView, Image, Pressable} from 'react-native';
import {SvgUri} from 'react-native-svg';
import HyundaiLogo from '../../static/hyundai_logo.svg';
import TataLogo from '../../static/tata_logo.svg';
import MarutiLogo from '../../static/maruti_logo.svg';

function CompanySelector({navigation}) {
  const [number, onChangeNumber] = React.useState(null);
  const [cracked, onChangeCracked] = React.useState({
    month: null,
    year: null,
    debugString: 'blank',
  });

  return (
    <SafeAreaView style={styles.buttonsAlignment}>
      <Pressable
        onPress={() => {
          navigation.navigate('Cracker', {brand: 'hyundai'});
        }}>
        <HyundaiLogo width={90} height={90} />
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('Cracker', {brand: 'tata'});
        }}>
        <TataLogo width={40} height={40} />
      </Pressable>

      <Text />
      <Text />
      <Text />

      <Pressable
        onPress={() => {
          navigation.navigate('Cracker', {brand: 'maruti'});
        }}>
        <MarutiLogo width={'110'} height={'11'} />
      </Pressable>
    </SafeAreaView>
  );
}

const containerStyle = {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {...containerStyle},
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  textBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonsAlignment: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default CompanySelector;
