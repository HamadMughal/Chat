import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {ImageSet} from '../../constents/Images';
import Card from '../../components/Card';

const Conversations = ({navigation}) => {
  const data = [
    {
      id: 1,
      name: 'Ali',
      pic: ImageSet.userDummyProfile,
      lastMessage: 'Allah Hafiz',
      time: '12:09 PM',
    },
    {
      id: 2,
      name: 'Ahmad',
      pic: ImageSet.userDummyProfile,
      lastMessage: 'Ok Talk to you Later',
      time: 'Today',
    },
    {
      id: 3,
      name: 'Bilal',
      pic: ImageSet.userDummyProfile,
      lastMessage: 'Kia hal hai?',
      time: 'Yesterday',
    },
  ];

  const navigateToChat = user => {
    navigation.navigate('chat', {user: user});
  };

  return (
    <View>
      <Header centeralText={'Chat Room'} />
      <FlatList
        data={data}
        renderItem={({item}) => <Card item={item} goToChat={navigateToChat} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Conversations;

const styles = StyleSheet.create({});
