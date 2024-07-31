import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LineGradient from './LineGradient';
import CircularImage from './CircularImage';

const category = () => {
  const biriyani = require('../assets/Images/Category/biriyani.png');
  const burger = require('../assets/Images/Category/burger.png');
  const shawarma = require('../assets/Images/Category/shawarma.png');
  const shawaya = require('../assets/Images/Category/shawaya.png');
  const dosa = require('../assets/Images/Category/dosa.png');
  const icecream = require('../assets/Images/Category/icecream.png');
  const porotta = require('../assets/Images/Category/porotta.png');
  const juice = require('../assets/Images/Category/juice.jpg');
  return (
    <>
      <LineGradient gradTexts={'Select from category'} />
      <View style={styles.main_container}>
        <ScrollView horizontal 
      showsHorizontalScrollIndicator={false}>
          <View style={styles.items_container}>
            <View style={{flexDirection: 'row', gap:10}}>
              <CircularImage picture={biriyani} desc={'Biriyani'}/>
              <CircularImage picture={shawarma} desc={'Shawarma'}/>
              <CircularImage picture={dosa} desc={'Dosa'}/>
              <CircularImage picture={porotta} desc={'Porotta'}/>
              <CircularImage picture={biriyani} desc={'Biriyani'}/>
              <CircularImage picture={shawarma} desc={'Shawarma'}/>
              <CircularImage picture={dosa} desc={'Dosa'}/>
              <CircularImage picture={porotta} desc={'Porotta'}/>
            </View>
            <View style={{flexDirection: 'row', gap:10}}>
              <CircularImage picture={burger} desc={'Burger'} />
              <CircularImage picture={shawaya} desc={'Shawaya'}  />
              <CircularImage picture={icecream} desc={'Icecream'}  />
              <CircularImage picture={juice} desc={'Juice'}  />
              <CircularImage picture={burger} desc={'Burger'}  />
              <CircularImage picture={shawaya} desc={'Shawaya'}  />
              <CircularImage picture={icecream} desc={'Icecream'}  />
              <CircularImage picture={juice} desc={'Juice'}  />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default category;

const styles = StyleSheet.create({
  main_container: {
    height: 200,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    },
    items_container: {
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
