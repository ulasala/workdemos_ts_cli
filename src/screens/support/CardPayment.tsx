import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from './../../components/AppButton';

const CardPayment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Icon name="dangerous" style={styles.icon} size={30} />
        <Text style={styles.headingText}>Negative Balance Restriction</Text>
      </View>

      <Text style={styles.contentText}>
        Your Coinbase account lowbalance Your Coinbase account low balance Your
        Coinbase account low balance Your Coinbase account low balance
      </Text>
      <View style={styles.button}>
        <Button title="Make a Payment" color="#2196F3" onPress={() => {}} />
      </View>

      <View style={styles.line} />
      <View style={styles.button}>
        <Button title="Learn more" color="#2196F3" onPress={() => {}} />
      </View>
    </View>
  );
};

export default CardPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderColor: '#c5c5c5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 20,
  },
  heading: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'red',
    width: 50,
  },
  headingText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  contentText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    fontSize: 15,
    textAlign: 'justify',
    margin: 10,
  },
  line: {
    borderRadius: 5,
    borderColor: '#c5c5c5',
    borderWidth: 0.5,
    width: '80%',
  },
  button: {
    margin: 10,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
