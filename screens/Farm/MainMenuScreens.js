import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ToggleBtn from './ToggleBtn';
import BackButton from './BackButton';

export default function MainMenuScreens({route, navigation}) {
  const [view, setView] = useState('');
  useEffect(() => {
    setView(route.params.screenName || 'MARKETRATES');
  }, []);
  const rate = [
    {
      commodity: 'rice',
      price: '210',
    },
    {
      commodity: 'jowar',
      price: '80',
    },
    {
      commodity: 'Corn',
      price: '22.5',
    },
    {
      commodity: 'Apple',
      price: '220',
    },
    {
      commodity: 'Onion',
      price: '140',
    },
    {
      commodity: 'Urad dal',
      price: '55',
    },
    {
      commodity: 'Millet',
      price: '80',
    },
    {
      commodity: 'Wheat',
      price: '26',
    },
    {
      commodity: 'Flaxseed',
      price: '245',
    },
    {
      commodity: 'Masoor Dal',
      price: '145',
    },
    {
      commodity: 'Bqjra',
      price: '245',
    },
  ];
  const placeData = [
    {
      name: 'Rice',
      price: '₹218',
      src: require('../../assets/images/Rice.png'),
    },
    {
      name: 'Jowar',
      price: '₹218',
      src: require('../../assets/images/Jowar.png'),
    },
    {
      name: 'Corn',
      price: '₹218',
      src: require('../../assets/images/Corn.png'),
    },
    {
      name: 'Apple',
      price: '₹218',
      src: require('../../assets/images/Apple.png'),
    },
    {
      name: 'Onion',
      price: '₹218',
      src: require('../../assets/images/Onion.png'),
    },
    {
      name: 'Urad',
      price: '₹218',
      src: require('../../assets/images/Urad.png'),
    },
    {
      name: 'Corn',
      price: '₹218',
      src: require('../../assets/images/Corn.png'),
    },
    {
      name: 'Apple',
      price: '₹218',
      src: require('../../assets/images/Apple.png'),
    },
    {
      name: 'Onion',
      price: '₹218',
      src: require('../../assets/images/Onion.png'),
    },
    {
      name: 'Urad',
      price: '₹218',
      src: require('../../assets/images/Urad.png'),
    },
    {
      name: 'Corn',
      price: '₹218',
      src: require('../../assets/images/Corn.png'),
    },
    {
      name: 'Apple',
      price: '₹218',
      src: require('../../assets/images/Apple.png'),
    },
    {
      name: 'Onion',
      price: '₹218',
      src: require('../../assets/images/Onion.png'),
    },
    {
      name: 'Urad',
      price: '₹218',
      src: require('../../assets/images/Urad.png'),
    },
  ];
  console.log(route.params.screenName);
  const rateView = () => (
    <>
      <BackButton
        text={'Market Rates'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 5,
          borderRadius: 16,
          backgroundColor: '#fff',
          marginTop: 50,
          marginBottom: 10,
        }}>
        <TextInput
          //   value={chat}
          placeholder="Search "
          placeholderTextColor="gray"
          style={{width: '55%', color: '#000'}}
          onChangeText={e => {
            // setChat(e);
          }}
        />
        <Image
          style={{height: 25, width: '10%'}}
          resizeMode="contain"
          source={require('../../assets/images/Search.png')}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          borderRadius: 8,
          padding: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            //   marginBottom: 10,
          }}>
          <Text
            style={[style.text, {color: 'gray', fontSize: 16, width: '70%'}]}>
            Commodity
          </Text>
          <Text
            style={[style.text, {color: 'gray', fontSize: 16, width: '30%'}]}>
            Rate(₹/kg)
          </Text>
        </View>
        {rate.map(e => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              //   marginBottom: 10,
            }}>
            <Text style={style.text}>{e.commodity}</Text>

            <Text style={[style.text, {width: '30%'}]}> {e.price}</Text>
          </View>
        ))}
      </View>
    </>
  );
  const placeView = () => (
    <>
      <BackButton
        text={'MarketPlace'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 5,
          borderRadius: 16,
          backgroundColor: '#fff',
          marginTop: 50,
          marginBottom: 10,
        }}>
        <TextInput
          //   value={chat}
          placeholder="Search "
          placeholderTextColor="gray"
          style={{width: '55%', color: '#000'}}
          onChangeText={e => {
            // setChat(e);
          }}
        />
        <Image
          style={{height: 25, width: '10%'}}
          resizeMode="contain"
          source={require('../../assets/images/Search.png')}
        />
      </View>
      <ScrollView>
        <View
          style={{
            // backgroundColor: '#fff',
            width: '100%',
            borderRadius: 8,
            padding: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {placeData.map(e => (
            <View
              style={{
                width: '45%',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
                backgroundColor: '#fff',
                marginBottom: 10,
              }}>
              <Image
                // style={{height: 50, width: 50}}
                resizeMode="contain"
                source={e.src}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  // alignItems: 'center',
                }}>
                <Text style={style.text}>{e.name}</Text>

                <Text style={style.text}> {e.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
  const aiView = () => (
    <>
      <BackButton
        text={'AI in Agriculture'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 5,
          borderRadius: 16,
          marginTop: 50,
          marginBottom: 10,
        }}>
        <Image
          style={{height: 35, width: '20%'}}
          resizeMode="contain"
          source={require('../../assets/images/Rajesh.png')}
        />
        <Text style={{fontSize: 22, color: '#000'}}>Rajesh Gupta</Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View style={{width: '25%'}}></View>
        <Text style={{fontSize: 16, color: 'gray'}}>
          This might be coming very soon
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View style={{width: '25%'}}></View>
        <Text style={{fontSize: 16, color: 'gray'}}>
          would love to see it 😁
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            width: '30%',
            height: 1,
            borderWidth: 1,
            borderColor: 'gray',
            opacity: 0.2,
          }}></View>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'gray',
            alignSelf: 'center',
          }}>
          Today, March 24
        </Text>
        <View
          style={{
            width: '30%',
            height: 1,
            borderWidth: 1,
            borderColor: 'gray',
            opacity: 0.2,
          }}></View>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 5,
          borderRadius: 16,
          marginTop: 20,
          marginBottom: 10,
        }}>
        <Image
          style={{height: 35, width: '20%'}}
          resizeMode="contain"
          source={require('../../assets/images/Ram.png')}
        />
        <Text style={{fontSize: 22, color: '#000'}}>Ram Trehan (expert) </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View style={{width: '25%'}}></View>
        <Text style={{fontSize: 16, width: '70%', color: 'gray'}}>
          Hey, happy to hear from you. Yes, I will be back in a couple of days.
          Any Questions ?
        </Text>
      </View>
    </>
  );

  return (
    <View style={{flex: 1, height: '100%', width: '100%', padding: 10}}>
      {view == 'MARKETRATES' && rateView()}
      {view == 'MARKETPLACE' && placeView()}
      {view == 'AI' && aiView()}
      <View
        style={{
          width: '90%',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 30,
          height: 60,
          backgroundColor: '#000',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 5,
          marginBottom: 10,
        }}>
        <Pressable
          onPress={() => {
            setView('MARKETRATES');
          }}
          style={{width: '30%'}}>
          <Image
            resizeMode="center"
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/images/Market.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setView('AI');
          }}
          style={{width: '30%'}}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/images/Ai.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setView('MARKETPLACE');
          }}
          style={{width: '30%'}}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/images/Bag.png')}
          />
        </Pressable>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 50,
          right: 0,
        }}>
        <ToggleBtn navigation={navigation} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  text: {color: 'gray', fontSize: 16},
});
