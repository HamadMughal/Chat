import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {ImageSet} from '../../constents/Images';
import Card from '../../components/Card';
import {getConversations} from '../../networking/chatServices';

const Conversations = ({navigation}) => {
  const [apiData, setApiData] = useState([]);

  const data = [
    {
      id: 1,
      username: 'Ali',
      pic: ImageSet.userDummyProfile,
      lastMessage: 'Allah Hafiz',
      time: '12:09 PM',
    },
    {
      id: 2,
      username: 'Ahmad',
      pic: ImageSet.userDummyProfile,
      lastMessage: 'Ok Talk to you Later',
      time: 'Today',
    },
    {
      id: 3,
      username: 'Bilal',
      pic: ImageSet.userDummyProfile,
      lastMessage: 'Kia hal hai?',
      time: 'Yesterday',
    },
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getConversationsHandler();
    });
    return unsubscribe;
  }, [navigation]);

  const getConversationsHandler = async () => {
    try {
      const response = await getConversations();

      if (response.data.status === 200) {
        setApiData(response.data.conversations);
      } else {
        Alert.alert('message', 'Api fail');
        console.log('error ============== : ', response.data);
      }
    } catch (error) {
      console.log('error ========== : ', error);
    }
  };

  const navigateToChat = user => {
    navigation.navigate('chat', {user: user});
  };

  return (
    <View>
      <Header centeralText={'Chat Room'} />
      {data ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Card item={item} goToChat={navigateToChat} />
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  );
};

export default Conversations;

const styles = StyleSheet.create({});
