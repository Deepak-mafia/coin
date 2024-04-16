import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';
export default function Discover() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_ntmXVObvmyXeqg',
            amount: '500',
            name: 'Deepak ',
            order_id: '', //Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
            },
            theme: {color: '#FFFFFF'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}>
        <Text>Discover</Text>
      </TouchableOpacity>
      {/* <TouchableHighlight
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: '<YOUR_KEY_ID>',
            amount: '5000',
            name: 'Acme Corp',
            order_id: '001', //Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
            },
            theme: {color: '#53a20e'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}></TouchableHighlight> */}
    </View>
  );
}
