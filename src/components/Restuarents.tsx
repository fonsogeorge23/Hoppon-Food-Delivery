import {StyleSheet, Image, View, ImageBackground, Text} from 'react-native';
import React from 'react';
import LineGradient from './LineGradient';

const Restuarents = () => {
  const imperialKitchen = require('../assets/Images/Restaurents/ImperialKitchen.jpeg');
  const kitchen = require('../assets/Images/Restaurents/Kitchen.jpeg');
  return (
    <>
      <View style={styles.main_container}>
        <LineGradient gradTexts={'All Restaurants'} />
        <View
          style={{
            backgroundColor: 'white',
            height: '50%',
            borderRadius: 10,
            overflow: 'hidden',
            flexDirection: 'row',
          }}>
          <ImageBackground
            source={imperialKitchen}
            style={{height: '100%', width: '80%', justifyContent: 'flex-end'}}
            imageStyle={{
              resizeMode: 'cover',
            }}>
            <Text
              style={[
                styles.text_bold,
                {color: 'white', padding: 10, fontSize: 20},
              ]}>
                          50 % OFF <Text>up to ₹120</Text>
            </Text>
                      <Image source={kitchen} style={{height:'100%', width:'50%', alignSelf:'flex-end',marginHorizontal:-92, resizeMode:'cover'}} />
          </ImageBackground>
        </View>
        <View style={{padding: 0}}>
          <Text style={styles.title_text}>Imperial Kitchen</Text>
          <Text>Chinese, South Indian, Pizza ...</Text>
          <View style={styles.location_text}>
            <Text style={styles.text_bold}>Chackka Bypass</Text>
            <Text style={styles.text_bold}>5 km • 50min</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Restuarents;

const styles = StyleSheet.create({
  main_container: {
    height: 250,
    alignSelf: 'center',
    padding: 10,
  },
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 5,
  },
  location_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_bold: {
    fontWeight: 'bold',
  },
});
