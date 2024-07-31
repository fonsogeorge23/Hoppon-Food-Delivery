import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

export class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        paginationStyle={{
          position: 'absolute',
          left: -260,
          bottom: 10,
        }}
        showsButtons={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}>
        <View style={styles.slide1}>
          <ImageBackground
            source={require('../assets/Images/Slider1.png')}
            style={{width: '100%', height: '100%'}}>
            <View>
              <Text
                style={{color: 'white', fontSize: 20, top: 360, margin: 10}}>
                Nam tempus metus diam, sed efficitur ante imperdiet eu.
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.slide1}>
          <ImageBackground
            source={require('../assets/Images/Slider2.png')}
            style={{width: '100%', height: '100%'}}>
            <Text style={{color: 'white', fontSize: 20, top: 360, margin: 10}}>
              Nam tempus metus diam, sed efficitur ante imperdiet eu.
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.slide1}>
          <ImageBackground
            source={require('../assets/Images/Slider3.png')}
            style={{width: '100%', height: '100%'}}>
            <Text style={{color: 'white', fontSize: 20, top: 360, margin: 10}}>
              Nam tempus metus diam, sed efficitur ante imperdiet eu.
            </Text>
          </ImageBackground>
        </View>
      </Swiper>
    );
  }
}

export const TitleText: React.FC = () => {
  return <></>;
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  wrapper: {},
  slide1: {
    flex: 1,
  },
  dot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 30,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
