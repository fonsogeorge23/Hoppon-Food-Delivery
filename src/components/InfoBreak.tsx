import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface infoProp {
  info: string;
}

const InfoBreak = ({info}: infoProp) => {
  return (
    <View style={{flex: 0.7, flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.hairline} />
      <Text style={{width: 120, textAlign: 'center', color: 'black'}}>
        {info}
      </Text>
      <View style={styles.hairline} />
    </View>
  );
};

export default InfoBreak;

const styles = StyleSheet.create({
  info_container: {
    flexDirection: 'row',
  },
  linearGradient: {
    height: 0.1,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonText: {},
  hairline: {
    backgroundColor: 'black',
    height: 1.5,
    flex: 0.5,
  },
});
