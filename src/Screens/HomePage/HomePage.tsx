import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import LoginPage from '../LoginScreen/LoginPage';
import { TabActions } from '@react-navigation/native';
import LineGradient from '../../components/LineGradient';
import Category from '../../components/category';
import Restuarents from '../../components/Restuarents';

const HomePage: React.FC = () => {
  const location = require('../../assets/Icons/location.png');
  const downArrow = require('../../assets/Icons/downArrow.png');
  const searchIcon = require('../../assets/Icons/search.png');
  const mic = require('../../assets/Icons/mic.png');
  const offer = require('../../assets/Images/Offer.png');
  return (
    <>
      <View style={styles.home_container}>
        {/* Location information */}
        <View style={styles.location_container}>
          <View style={styles.location_icon_container}>
            <Image source={location} style={styles.location_icon} />
          </View>
          <View>
            <View style={styles.place_container}>
              <Text style={styles.location_bold_text}>Kazhakkoottam</Text>
              <Image source={downArrow} style={styles.down_arrow_icon} />
            </View>
            <View>
              <Text>11th Floor, Ganga Tower, Technopark Phase 3 ...</Text>
            </View>
          </View>
          <View style={styles.threedot_container}>
            <Text style={styles.threedot_text}>⋮</Text>
          </View>
        </View>
        {/* Search Section */}
        <View style={styles.search_container}>
          <View style={styles.search_box}>
            <Image source={searchIcon} style={styles.search_icon} />
            <TextInput
              style={styles.search_input}
              placeholder="Search for dishes and restaurants na..."></TextInput>
            <View style={styles.verticleLine}></View>
            <Image
              source={mic}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                flexGrow: 1,
              }}
            />
          </View>
        </View>
        <ScrollView>
          <Image source={offer} />
          <Category />
          <Restuarents/>
        </ScrollView>
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  location_container: {
    flexDirection: 'row',
    gap: 5,
    padding: 10,
  },
  location_icon_container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  location_icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    margin: 10,
  },
  place_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  location_bold_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  down_arrow_icon: {
    height: 10,
    width: 20,
    resizeMode: 'contain',
  },
  threedot_container: {
    marginLeft: 'auto',
    marginRight: 5,
  },
  threedot_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  verticleLine: {
    height: '60%',
    width: 1,
    backgroundColor: 'black',
  },
  search_container: {
    height: 65,
  },
  search_box: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#33333',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 8,
  },
  search_icon: {
    alignSelf: 'center',
    height: 15,
    width: 15,
    resizeMode: 'contain',
    margin: 10,
  },
  search_input: {
    backgroundColor: 'white',
    flexGrow: 1,
    fontSize: 16,
  },
  mic: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    flexGrow: 1,
  },
});
