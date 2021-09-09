import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArticleScreen from './ArticleScreen';

const messages = [
  {
    id: 1,
    title: 'Sample Question 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 2,
    title: 'Sample question 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 3,
    title: 'Sample question 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 4,
    title: 'Sample question 4',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 5,
    title: 'Sample question 5',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

const ArticleList = () => {
  const navigation = useNavigation();
  // const onPressHandler = message => {
  //   navigation.navigate('ArticleScreen', {
  //     id: message.id,
  //     title: message.title,
  //     description: message.description,
  //   });
  // };
  return (
    <View style={styles.body}>
      <Text style={styles.headingText}> Troubleshooting</Text>
      {messages.map(message => {
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('ArticleScreen', {
                id: message.id,
                title: message.title,
                description: message.description,
              });
            }}
            key={message.id}>
            <View style={styles.listItem}>
              <Text style={styles.text}>{message.title}</Text>
              <Icon name="greater-than" style={styles.icon} size={15} />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default ArticleList;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    width: '90%',
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  headingText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
});

// <FlatList
//   data={messages}
//   keyExtractor={message => message.id.toString()}
//   renderItem={({item}) => (
//     <View style={styles.listItem}>
//       <Text style={styles.text}>{item.title}</Text>
//       <Icon name="chat" />
//     </View>
//   )}
// />
