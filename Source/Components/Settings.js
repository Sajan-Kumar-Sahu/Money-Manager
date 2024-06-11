import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth'
import { useNavigation, StackActions } from '@react-navigation/native';
import {styles} from '../Styles/Styles';
import {HomeStyle} from './homeStyle';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={HomeStyle.background}>
      <View>
        <TouchableOpacity //Sign In Button
          style={styles.btnCmp}
            onPress={async()=>{
              await auth().signOut();
              navigation.dispatch(StackActions.replace("SignIn"));
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 30,
              textAlign: 'center',
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Settings;
