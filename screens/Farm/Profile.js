import {View, ImageBackground, TextInput, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import BackButton from './BackButton';
import ContinueBtn from './ContinueBtn';

export default function Profile({navigation}) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../../assets/images/ProfilePage.png')}>
        <BackButton
          text={'Profile'}
          onPress={() => {
            navigation.goBack();
          }}
          color="#fff"
        />
        <View style={{padding: 10}}>
          <View
            style={{
              width: '100%',
              height: '40%',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: 20,
            }}>
            <Text>Change Picture</Text>
          </View>
          <Text style={styles.text}>Username</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setName(e)}
            placeholder="Enter your name"
            placeholderTextColor="gray"
            value={name}
          />
          <Text style={{color: '#000'}}>Email I’d</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={e => setEmail(e)}
            placeholder="Enter Email"
            placeholderTextColor="gray"
            value={email}
          />
          <Text style={styles.text}>Phone Number</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={e => setPhone(e)}
            placeholder="Enter Phone Number"
            placeholderTextColor="gray"
            value={phone}
          />
          <Text style={styles.text}>Location</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={e => setLocation(e)}
            placeholder="Enter Location"
            placeholderTextColor="gray"
            value={location}
          />
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <ContinueBtn
            text={'Update'}
            onPress={() => {
              console.log('UPDATE');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'green',
    color: '#000',
  },
  text: {color: '#000', marginBottom: 5, fontWeight: '500'},
});
