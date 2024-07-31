import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ImageProp{
    picture: any,
    desc:string,
}
const CircularImage: React.FC<ImageProp> = ({ picture, desc }) => {
    return (
      <View style={styles.main_container}>
            <Image source={picture} style={styles.image} />
            <Text style={styles.text}>{desc}</Text>
      </View>
    );
  };

export default CircularImage;

const styles = StyleSheet.create({
  main_container: {
    alignItems: 'center',
    padding: 4,
  },
  image: {
    width: 70, 
    height: 70, 
    borderRadius: 50, 
    },
    text: {
      color:'black'
  }
});
