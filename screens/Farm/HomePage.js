import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import ToggleBtn from './ToggleBtn';

export default function HomePage({navigation}) {
  return (
    <View>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        source={require('../../assets/images/Homepage.png')}>
        <View
          style={{
            height: '50%',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 26,
              fontWeight: '500',
              color: '#fff',
              marginTop: 20,
            }}>
            Wheat
          </Text>
          <View style={{alignItems: 'flex-end', paddingHorizontal: 10}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Settings');
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                resizeMode="contain"
                source={require('../../assets/images/setting.png')}
              />
            </Pressable>
            <Image
              style={{
                width: 30,
                height: 30,
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="contain"
              source={require('../../assets/images/notification.png')}
            />
          </View>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            flexDirection: 'row',
            paddingTop: 30,
          }}>
          <View
            style={{
              height: '100%',
              width: '50%',
              alignItems: 'center',
            }}>
            <View style={[styles.container]}>
              <Text style={{fontSize: 18, fontWeight: '500', color: '#728AB7'}}>
                Weather
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  resizeMode="contain"
                  source={require('../../assets/images/Cloud.png')}
                />
                <Text
                  style={{fontSize: 22, fontWeight: '500', color: '#728AB7'}}>
                  12
                </Text>
              </View>
              <Text style={{fontSize: 12, fontWeight: '500', color: '#000'}}>
                Sri Ganganagar, Rajasthan
              </Text>
            </View>
            <View style={[styles.container]}>
              <Text style={{fontSize: 18, fontWeight: '500', color: '#728AB7'}}>
                Upcoming Tasks/Events
              </Text>

              <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
                • Organize season’s produce
              </Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
                • Harvest Acre no. 20
              </Text>
            </View>
            <View style={[styles.card, styles.shadowProp]}></View>
          </View>

          <View
            style={{
              height: '100%',
              width: '50%',
            }}>
            <View style={[styles.container]}>
              <Text style={{fontSize: 18, fontWeight: '500', color: '#728AB7'}}>
                Irrigation
              </Text>
              <View
                style={{
                  backgroundColor: '#4632C0',
                  width: '100%',
                  height: 15,
                  borderRadius: 50,
                }}></View>
            </View>
            <View style={[styles.container]}>
              <Text style={{fontSize: 18, fontWeight: '500', color: '#728AB7'}}>
                Soil Fertility
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Image
                  style={{
                    width: '100%',
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  resizeMode="contain"
                  source={require('../../assets/images/Linear.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ToggleBtn navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F0F3',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: '90%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  container: {
    padding: 15,
    backgroundColor: '#fff',
    // backgroundColor: '#F0F0F3',
    borderRadius: 21.354,
    shadowColor: 'rgba(174, 174, 192, 0.40)',
    shadowOffset: {
      width: 5.17893,
      height: 5.17893,
    },
    shadowRadius: 6.5368,
    shadowOpacity: 0.2,
    elevation: 5,
    margin: 10,
  },
});
