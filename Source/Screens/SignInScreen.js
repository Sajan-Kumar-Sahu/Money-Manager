import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  Alert,
  SafeAreaView,
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
          navigation.dispatch(StackActions.replace('TabNav'));
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#071611'}}>
      <StatusBar barStyle="light-content" backgroundColor="#071611" />
      <View style={styles.Container}>
        <Text //Hello
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Hello,
        </Text>
        <Text //Welcome
          style={{
            color: '#DFFF70',
            fontWeight: 'bold',
            fontSize: 50,
            marginBottom: 70,
          }}>
          Welcome !
        </Text>
        <TextInput //Input Field (Email)
          style={styles.textField}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          placeholderTextColor={'grey'}
        />
        <TextInput //Input Field (Password)
          style={styles.textField}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          placeholderTextColor={'grey'}
          secureTextEntry={true}
        />
        <TouchableOpacity //Sign In Button
          style={styles.btnCmp}
          onPress={() => handleLogin(email, password)}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 30,
              textAlign: 'center',
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
        <View //Separator
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#DFFF70'}} />
          <View>
            <Text
              style={{
                width: 50,
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Or
            </Text>
          </View>

          <View style={{flex: 1, height: 1, backgroundColor: '#DFFF70'}} />
        </View>

        <View //Other Sign in options
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 120,
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: '#2A3934',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons name="google" size={30} color={'white'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: '#2A3934',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons name="facebook-f" size={30} color={'white'} />
            </View>
          </TouchableOpacity>
        </View>

        <View //Don't have an account
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Don't have an account yet?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text
              style={{
                color: '#DFFF70',
                fontWeight: 'bold',
                fontSize: 18,
                marginStart: 3,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
