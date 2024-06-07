import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../Styles/Styles';
import auth from '@react-native-firebase/auth';
import {StackActions,useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.signinContainer}>
      <Text
        style={{
          color: '#fb8500',
          fontWeight: 'bold',
          fontSize: 50,
          marginBottom: 70,
          textAlign: 'center',
        }}>
        Home Page !
      </Text>
      <TouchableOpacity
        style={styles.btnCmp}
        onPress={async () => {
          await auth().signOut();
          navigation.dispatch(StackActions.replace('SignIn'));
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
