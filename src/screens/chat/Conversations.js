import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {ImageSet} from '../../constents/Images';
import Card from '../../components/Card';
import {getConversations} from '../../networking/chatServices';

const Conversations = ({navigation}) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getConversationsHandler();
  }, [getConversationsHandler]);

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
      {apiData.length > 0 ? (
        <FlatList
          data={apiData}
          renderItem={({item}) => (
            <Card item={item} goToChat={navigateToChat} />
          )}
          keyExtractor={item => item._id}
        />
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  );
};

export default Conversations;

const styles = StyleSheet.create({});
