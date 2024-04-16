import {
  View,
  Text,
  ScrollView,
  Modal,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import TextComp from '../commoncomponents/TextComp';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useTranslation} from 'react-i18next';
import i18next, {languageResources} from '../locales/i18next';
import languageList from '../locales/languageList.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account() {
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();

  const setlanguage = async lang => {
    i18next.changeLanguage(lang);
    await AsyncStorage.setItem('lang', lang);
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    setVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          // padding: scale(10),
          flex: 1,
        }}>
        <View style={{paddingTop: verticalScale(25)}}></View>
        <Modal visible={visible} style={{}}>
          <FlatList
            data={Object.keys(languageResources)}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: 'gray',
                    marginVertical: 5,
                  }}
                  onPress={() => {
                    setlanguage(item);
                  }}>
                  {console.log('item', item)}

                  <Text>{languageList[item].nativeName}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Modal>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: moderateScale(15),
          }}>
          <TextComp text={'Account'} />
          <Pressable
            onPress={() => {
              setVisible(true);
            }}>
            <Text>{t('changeLanguage')}</Text>
          </Pressable>
          {/* <IconComp
            name={'bell'}
            from={'Feather'}
            size={22}
            color={'#387ed1'}
          /> */}
          <Feather name="bell" size={22} color={'#387ed1'} />
        </View>

        {/* <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            borderWidth: 1,
            borderColor: 'green',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: moderateScale(75),
              backgroundColor: 'lightblue',
              height: '100%',
              borderRadius: 50,
              justifyContent: 'center',
            }}>
            <TextComp text={'DC'} />
          </View>

          <View>
            <TextComp text={'Deepak Chaudhary'} />
            <TextComp text={'ABC123'} />
          </View>
        </View> */}
      </View>
      <View
        style={{
          flex: 10,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'green',
          height: '100%',
          width: '100%',
        }}>
        <Text>{t('welcome')}</Text>
      </View>
    </View>
  );
}

{
  /* <View style={{flexDirection: 'row'}}>
  <View
    style={{
      width: moderateScale(50),
      height: verticalScale(50),
      borderColor: 'green',
      borderWidth: 1,
    }}>
    <TextComp text="DC" />
  </View>
  <View>
    <TextComp text="Deepak Chaudhary" />
  </View>
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <TextComp text="ABC123" size={scale(10)} />
    <EvilIcons name="arrow-right" size={scale(30)} color={'#387ed1'} />
  </View>
</View>; */
}
