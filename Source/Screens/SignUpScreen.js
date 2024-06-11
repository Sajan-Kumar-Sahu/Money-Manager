import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  Alert,
  SafeAreaView,
  ActivityIndicator,
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
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const handleSignUp = async (email, password) => {
    if (email && password && password == confirmPassword) {
      setLoading(true);
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
        setConfirmPassword('');

        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        Alert.alert(
          'Verification Request',
          'A link has been sent to your email. Kindly verify your email by clicking the link.',
        );
        navigation.dispatch(StackActions.replace('SignIn'));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert('Invalid input', 'Kindly fill all the details correctly.');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#071611'}}>
      <StatusBar barStyle="light-content" backgroundColor="#071611" />
      <View style={styles.Container}>
        <Text //Sign Up text
          style={{
            color: '#DFFF70',
            fontWeight: 'bold',
            fontSize: 50,
            marginBottom: 50,
            textAlign: 'center',
          }}>
          Sign Up
        </Text>

        <TextInput //Input Field (Name)
          style={styles.textField}
          placeholder="Name"
          placeholderTextColor={'grey'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput //Input Field (Email)
          style={styles.textField}
          placeholder="Email"
          placeholderTextColor={'grey'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput //Input Field (Password)
          style={styles.textField}
          placeholder="Password"
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput //Input Field (Confirm Passwod)
          style={styles.textField}
          placeholder="Confirm Password"
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />

        {password !== confirmPassword ? ( //password verification
          <Text
            style={{
              color: '#DFFF70',
              fontSize: 15,
              fontWeight: 'bold',
              marginStart: 8,
              marginTop: 5,
            }}>
            Password does not match
          </Text>
        ) : null}

        {loading ? (
          <ActivityIndicator size="large" color="#DFFF70" />
        ) : (
          <TouchableOpacity //Sign up Button
            style={styles.btnCmp}
            onPress={() => handleSignUp(email, password)}>
            <Text
              style={{
                color: '#2A3934',
                fontWeight: 'bold',
                fontSize: 25,
                textAlign: 'center',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        )}

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

        <View //Already have an account
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
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(StackActions.replace('SignIn'));
            }}>
            <Text
              style={{
                color: '#DFFF70',
                fontWeight: 'bold',
                fontSize: 18,
                marginStart: 3,
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
