import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {HomeStyle} from './homeStyle.js';
import Icons from 'react-native-vector-icons/FontAwesome6';
import Icons2 from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <ScrollView style={HomeStyle.background}>
      <StatusBar barStyle="light-content" backgroundColor="#071611" />
      <View style={HomeStyle.headerContainer}>
        <TouchableOpacity>
          <Icons name="bars-staggered" size={30} color={'#18FBB6'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: '#2A3934',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icons name="user" size={25} color={'#18FBB6'} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
          Available Balance
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icons2 name="currency-rupee" size={30} color={'#18FBB6'} />
          <Text style={{fontSize: 25, color: '#18FBB6', fontWeight: 'bold'}}>
            30,000,00
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 20,
          marginStart: 10,
          fontWeight: 'bold',
          fontSize: 20,
          color: 'white',
        }}>
        Categories
      </Text>
      <ScrollView horizontal={true} style={HomeStyle.categoryContainer}>
        <View style={HomeStyle.Shopping}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Shopping
          </Text>
        </View>
        <View style={HomeStyle.Education}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Education
          </Text>
        </View>
        <View style={HomeStyle.HealthCare}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Health Care
          </Text>
        </View>
        <View style={HomeStyle.Food}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Food
          </Text>
        </View>
        <View style={HomeStyle.Shopping}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Shopping
          </Text>
        </View>
        <View style={HomeStyle.Education}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Education
          </Text>
        </View>
        <View style={HomeStyle.HealthCare}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Health Care
          </Text>
        </View>
        <View style={HomeStyle.Food}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Food
          </Text>
        </View>
      </ScrollView>
      <Text
        style={{
          marginTop: 20,
          marginStart: 10,
          fontWeight: 'bold',
          fontSize: 20,
          color: 'white',
          marginBottom: 10,
        }}>
        This Month
      </Text>
      <View style={HomeStyle.incomeCard}>
        <View style={HomeStyle.incomeCardContent}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            35,000,00
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              color: 'green',
              fontWeight: 'bold',
            }}>
            Income
          </Text>
        </View>
        <View style={HomeStyle.incomeCardContent}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            36,000,00
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              color: 'red',
              fontWeight: 'bold',
            }}>
            Expenses
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 20,
          marginStart: 10,
          fontWeight: 'bold',
          fontSize: 20,
          color: 'white',
          marginBottom: 10,
        }}>
        Transactions
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;
