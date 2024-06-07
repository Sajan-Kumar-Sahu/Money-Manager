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
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async (email, password) => {
    if (email && password && (password==confirmPassword)) {
      try {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );

        const userData = {
          name: name,
          email: email,
        };

        await firestore()
          .collection('users')
          .doc(response.user.id)
          .set(userData);

        setName('');
        setEmail('');
        setPassword('');

        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        Alert.alert(
          'Verification Request',
          'A link has been sent to your email. Kindly verify your email by clicking the link.'
        );
        navigation.dispatch(StackActions.replace('SignIn'));
      } catch (error) {
        console.errpr(error);
      }
    } else {
      Alert.alert('Invalid input', 'Kindly fill all the details correctly.');
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
          marginBottom: 50,
          textAlign: 'center',
        }}>
        Sign Up
      </Text>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Full Name
      </Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Your Full Name"
        placeholderTextColor={'black'}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 20,
        }}>
        Email Address
      </Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Your Email Address"
        placeholderTextColor={'black'}
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
        placeholder="Enter Your Password"
        placeholderTextColor={'black'}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 20,
        }}>
        Confirm Password
      </Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Password Again"
        placeholderTextColor={'black'}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
      {password !== confirmPassword ? (
        <Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>
          Password does not match
        </Text>
      ) : null}
      <TouchableOpacity
        style={styles.btnCmp}
        onPress={() => handleSignUp(email, password)}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'center',
          }}>
          Sign Up
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
          Already have an account ?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              fontSize: 16,
              marginStart: 3,
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
