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
  CheckBox,
} from 'react-native';
import Button from './../../components/Button';
import Home from './../Home';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from './../../resources/colors';

const Register = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainView}>
        <View>
          <Text style={styles.textStyle}>Create your account</Text>
          <View style={styles.setMargin}>
            <Text style={styles.textStyle1}>First Name</Text>
            <TextInput
              style={styles.textInputStyle}
              value={firstname}
              placeholder={'First Name'}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.setMargin}>
            <Text style={styles.textStyle1}>Last Name</Text>
            <TextInput
              style={styles.textInputStyle}
              value={lastname}
              placeholder={'Last Name'}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.setMargin}>
            <Text style={styles.textStyle1}>Email</Text>
            <TextInput
              style={styles.textInputStyle}
              value={email}
              placeholder={'you@example.com'}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.setMargin}>
            <Text style={styles.textStyle1}>Password</Text>
            <TextInput
              style={styles.textInputStyle}
              value={password}
              placeholder={'Minimum 8 characters'}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.flexRowView}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />

            <TouchableOpacity>
              <Text style={styles.linkStyle}>
                Privacy policy ccccccccccccccccccccccccccccccc
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnView}>
          <Button
            text='Create Account'
            disabled={false}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

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
