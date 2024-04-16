import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {whatsappDummt} from '../../constants/whatsAppDummy';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Friends() {
  const [data, setData] = useState(whatsappDummt.allFriends);
  //   const fun = () => {
  //     const sta = data.sort((a, b) => {
  //       return b.name - a.name;
  //     });
  //     setData(sta);
  //     console.log(sta[0], '))))))))))))))))))');
  //   };
  //   //   console.log(data[0], ')))))');
  //   useEffect(() => {
  //     fun();
  //   }, []);
  return (
    <ScrollView>
      {data.map((e, i) => {
        return (
          <View
            style={{
              paddingVertical: 5,
              marginHorizontal: 10,
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '15%',
                height: 60,
                borderRadius: 50,
                backgroundColor: e.picture === '' ? 'gray' : null,
              }}>
              {e.picture !== '' ? (
                <Image
                  source={{uri: e.picture}}
                  style={{width: '100%', height: '100%', borderRadius: 50}}
                />
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                  }}>
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={32}
                    color={'black'}
                  />
                </View>
              )}
            </View>
            <View
              style={{
                width: '85%',
                paddingHorizontal: 8,
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>{e.name}</Text>
                {/* <Text>{e.latest_timestamp}</Text> */}
              </View>
              <View style={{}}>
                <Text style={styles.message} numberOfLines={1}>
                  {e.status}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  message: {
    fontSize: 16,
    fontWeight: '600',
  },
});
