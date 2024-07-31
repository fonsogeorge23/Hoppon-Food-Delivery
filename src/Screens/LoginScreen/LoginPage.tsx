import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../../components/Logo';
import InputBox from '../../components/InputBox';
import LinearGradient from 'react-native-linear-gradient';
import InfoBreak from '../../components/InfoBreak';

const LoginPage: React.FC = ({navigation}: any) => {
  return (
    <>
      <LinearGradient
        colors={['#F5F0F1', '#E6E4EE', '#F5F0F1']}
        style={styles.linearGradient}>
        {/* Logo and skip button */}
        <View style={styles.top_container}>
          <View style={styles.skip_button_container}>
            <TouchableOpacity
              style={styles.skip_button}
              onPress={() => {
                navigation.navigate('HomeNavigation');
              }}>
              <Text>SKIP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logo_container}>
            <Logo />
          </View>
        </View>
        {/* Sign in section */}
        <View style={styles.center_container}>
          <View style={styles.input_contianer}>
            <InputBox
              label={'Email ID'}
              icon={'user'}
              placeholder={'Enter Email ID'}
              errorMessage={'Enter a valid Email ID'}
              password={false}
            />
          </View>
          <View style={styles.input_contianer}>
            <InputBox
              label={'Password'}
              icon={'lock'}
              placeholder={'Password'}
              errorMessage={'Enter a valid password'}
              password={true}
            />
          </View>
          <View style={styles.signin_container}>
            <View style={styles.forget_password_container}>
              <TouchableOpacity>
                <Text style={styles.forget_password_text}>
                  Forget Password ?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.signin_button}
              onPress={() => {
                navigation.navigate('HomeNavigation');
              }}>
              <Text style={styles.signin_text}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Additional methods */}
        <View style={styles.bottom_container}>
          <View style={styles.info_break}>
            <InfoBreak info={'Or continue with'} />
          </View>
          <View style={{flex: 1}}>
            <View
              style={styles.icons_container}>
              <View
                style={styles.icon}>
                <Image source={require('../../assets/Icons/google.png')} />
              </View>
              <View
                style={styles.icon}>
                <Image source={require('../../assets/Icons/apple.png')} />
              </View>
              <View
                style={styles.icon}>
                <Image source={require('../../assets/Icons/facebook.png')} />
              </View>
            </View>
            <View
              style={styles.eula_container}>
              <View
                style={styles.register_container}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                  <Text style={{color: '#FF724C', fontWeight: 'bold'}}>
                    Register now
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <Text>
                  By logging in, you agree to the{' '}
                  <Text style={{color: '#FF724C', fontWeight: 'bold'}}>
                    Terms
                  </Text>{' '}
                  and{' '}
                  <Text style={{color: '#FF724C', fontWeight: 'bold'}}>
                    Conditions.
                  </Text>
                  .{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    padding: 10,
    gap: 20,
  },
  top_container: {
    flex: 7,
  },
  center_container: {
    flex: 10,
    justifyContent: 'space-evenly',
  },
  bottom_container: {
    flex: 10,
  },
  skip_button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  skip_button: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    margin: 1,
  },
  logo_container: {
    flex: 5,
  },
  input_contianer: {
    flex: 1,
  },
  signin_container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  forget_password_container: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forget_password_text: {
    color: 'black',
  },
  signin_button: {
    flex: 0.6,
    backgroundColor: '#FF724C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signin_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
  info_break: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15
  },
  icons_container: {    
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    height: '60%',
    width: '20%',
    borderColor: 'white',
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eula_container: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',    
  },
  register_container:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
