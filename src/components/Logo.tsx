import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <>
      <View style={styles.logo_container}>
        <View style={styles.image_container}>
          <Image
            style={styles.logo}
            source={require('../assets/Icons/logo.png')}
          />
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>Sign in or sign up to Hoppon</Text>
          <Text style={styles.caption_text}>Be ready when price drop</Text>
        </View>
      </View>
    </>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo_container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'center',
  },
  title_container: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
  title_text: {
    fontFamily: 'Sans Pro',
    fontWeight: '700',
    fontSize: 20,
  },
  caption_text: {
    fontWeight: '400',
    fontSize: 14,
  },
});
