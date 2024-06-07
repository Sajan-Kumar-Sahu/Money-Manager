import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const splashImage = require('../Styles/SplashScreen.png');
export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(async () => {
      const unSubscribe = await auth().onAuthStateChanged(user => {
        const routeName = user !== null ? 'Home' : 'SignIn';

        navigation.dispatch(StackActions.replace(routeName));
        unSubscribe();
      });
    }, 2000);
  }, []);
  return (
    <View>
      <Image style={{width: '100%', height: '100%'}} source={splashImage} />
    </View>
  );
}

const styles = StyleSheet.create({});
