import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SwiperComponent } from '../../components/Slider';


const LaunchPage: React.FC = ({navigation}:any) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <SwiperComponent />
        </View>
        <View style={styles.content_container}>
          <Text style={styles.text}>LET'S GET STARTED</Text>
          <Text style={styles.text_small}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Login")}}>
            <Text style={styles.button_text}>JOIN NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LaunchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 2,
    padding: 15,
  },
  image_container: {
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    height: '65%',
      borderRadius: 10,
    overflow:"hidden"
  },
  content_container: {
    width: '100%',
    flexGrow: 1,
  },
  text: {
    color: 'black',
    width: '50%',
    fontSize: 35,
    lineHeight: 50,
    paddingTop: 25,
    fontWeight: 'bold',
  },
  text_small: {
    fontSize: 15,
  },
  button: {
    backgroundColor: '#FF724C',
    height: 50,
    marginTop: 'auto',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
