import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import Button from './../../components/Button';
import Home from './../Home';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from './../../resources/colors';

const Login = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainView}>
        <View>
          <Text style={styles.textStyle}>Sign in to Coinbase</Text>

          <View style={styles.setMargin}>
            <Text style={styles.textStyle1}>Email</Text>
            <TextInput
              style={styles.textInputStyle}
              value={email}
              placeholder={'Email address'}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.setMargin}>
            <Text style={styles.textStyle1}>Password</Text>
            <TextInput
              style={styles.textInputStyle}
              value={password}
              secureTextEntry={true}
              placeholder={'********'}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.flexRowView}>
            <TouchableOpacity>
              <Text style={styles.linkStyle}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.linkStyle}>Privacy policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnView}>
          <Button
            text='Sign in'
            disabled={false}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  mainView: {
    flexGrow: 1,
    paddingTop: RFValue(30),
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  textStyle: {
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  textStyle1: {
    fontWeight: 'bold',
    fontSize: RFValue(14),
  },
  flexRowView: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  setMargin: {
    marginTop: 15,
  },
  textInputStyle: {
    height: RFValue(45),
    paddingHorizontal: 20,
    fontSize: RFValue(15),
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.mediumGrey,
  },
  btnView: {
    marginVertical: 20,
  },
  linkStyle: {
    fontSize: RFValue(14),
    color: colors.primaryBlue,
  },
});
