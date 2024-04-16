import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {whatsappDummt} from '../../constants/whatsAppDummy';
import {ChatStack} from '../../navigation/NavigationStack';

export default function Chats({navigation}) {
  const [data, setData] = useState(whatsappDummt.profile.friends);

  const retriveChat = e => {
    const dta = whatsappDummt.friends.filter(a => {
      return a.id === e.id;
    });
    return dta;
  };

  return (
    <ScrollView>
      {data.map((e, i) => {
        return (
          <Pressable
            onPress={() => {
              navigation.navigate('Chatlog', {
                data: retriveChat(e),
              });
            }}
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
              }}>
              <Image
                source={{uri: e.picture}}
                style={{width: '100%', height: '100%', borderRadius: 50}}
              />
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
                <Text>{e.latest_timestamp}</Text>
              </View>
              <View style={{}}>
                <Text style={styles.message} numberOfLines={1}>
                  {e.lastChat}
                </Text>
              </View>
            </View>
          </Pressable>
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
