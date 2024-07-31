import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface AppProps{
  gradTexts : string
}

const LineGradient = ({gradTexts}:AppProps) => {
  
  return (
    <View style={styles.container2}>
        <LinearGradient
          colors={['#FFFFFF','#E6E6EF', '#707079']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
        <Text style={styles.text}>{gradTexts}</Text>
        <LinearGradient
          colors={['#707079', '#E6E6EF', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </View>
  )
};

const styles = StyleSheet.create({
    container2: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
      },
      gradient: {
        flex: 1,
        height: 1,
      },
      text: {
        fontSize: 15,
        color: '#2A2C41',
        marginHorizontal: 10,
        textAlign: 'center',
      },
})

export default LineGradient