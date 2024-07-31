import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface InputProps {
  label: string;
  icon: any;
  placeholder: string;
  errorMessage: string;
  password: boolean;
  onFocus?: () => boolean;
}

const InputBox = ({
  label,
  icon,
  password,
  placeholder,
  errorMessage,
  onFocus,
}: InputProps) => {
  const [error, setError] = useState(false);
  const lock = (
    <CommunityIcons
      name="lock-outline"
      size={30}
      color={error ? '#F8566A' : 'black'}
    />
  );
  const user = (
    <AntDesign name="user" size={30} color={error ? '#F8566A' : 'black'} />
  );

  // Call the function to return the correct icon based on the icon prop
  function renderIcon() {
    return icon === 'user' ? user : lock;
  }
  return (
    <>
      <View
        style={{
          flex: 4,
          backgroundColor: 'white',
          borderRadius: 10,
          flexDirection: 'row',
          overflow: 'hidden',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {renderIcon()}
        </View>
        <View style={{flex: 6, justifyContent: 'center'}}>
          <TextInput style={{flex: 1}} placeholder={placeholder} 
            secureTextEntry={password}/>
        </View>
      </View>
      <View style={{flex: 2}}>
        {error == true && (
          <Text style={{marginLeft: 15, marginTop: 2, color: '#F8566A'}}>
            {errorMessage}
          </Text>
        )}
      </View>
    </>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 20,
    height: 55,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  icon: {
    resizeMode: 'cover',
  },
  input_text: {
    flex: 1,
  },
});
