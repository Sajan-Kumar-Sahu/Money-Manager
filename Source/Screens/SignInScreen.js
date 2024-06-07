import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../Styles/Styles.js';
import Icons from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  navigation = useNavigation();

  const handleLogin = async (email, password) => {
    try {
      if (email && password) {
        const isLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        console.log(isLogin);
        setEmail('');
        setPassword('');

        if (isLogin.user.emailVerified) {
          navigation.dispatch(StackActions.replace('Home'));
        } else {
          Alert.alert(
            'Verification Required',
            'Kindly verify your email. If link not received click RESEND to get the link',
            [
              {
                text: 'RESEND',
                onPress: async () => {
                  await auth().currentUser.sendEmailVerification();
                },
              },
              {
                text: 'OK',
              },
            ],
          );

          await auth().signOut();
        }
      } else {
        Alert.alert('Invalid input', 'Please fill all the details.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Unauthorized',
        'Email does not exist.Kindly register your email.',
      );
      setEmail('');
      setPassword('');
    }
  };
  return (
    <View style={styles.signinContainer}>
      <StatusBar hidden={false} />

      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        Hello
      </Text>
      <Text
        style={{
          color: '#fb8500',
          fontWeight: 'bold',
          fontSize: 50,
          marginBottom: 70,
        }}>
        Welcome !
      </Text>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Email Address
      </Text>
      <TextInput
        style={styles.textField}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 20,
        }}>
        Password
      </Text>
      <TextInput
        style={styles.textField}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.btnCmp}
        onPress={() => handleLogin(email, password)}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
          }}>
          Sign in
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              color: 'grey',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Or
          </Text>
        </View>

        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 120,
          marginTop: 20,
        }}>
        <TouchableOpacity>
          <Icons name="google" size={30} color={'red'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name="facebook" size={30} color={'#3b5998'} />
        </TouchableOpacity>
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Don't have an account yet?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              fontSize: 16,
              marginStart: 3,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
