import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Message from '../../components/Message';
import {Colors} from '../../constents/colors';
import {ImageSet} from '../../constents/Images';
import {getChat, sendMessage} from '../../networking/chatServices';

const Chat = ({route, navigation}) => {
  const {user} = route.params;
  const [message, setMessage] = useState('');
  const [apiData, setApiData] = useState([]);

  const messages = [
    {
      message: 'kia hal hai?',
      time: '12:00 PM',
      isMine: true,
    },
    {
      message: 'Alhamdulillah',
      time: '12:01 PM',
      isMine: false,
    },
    {
      message: 'kia hal hai?',
      time: '12:01 PM',
      isMine: false,
    },
    {
      message: 'Theek',
      time: '12:02 PM',
      isMine: true,
    },
    {
      message: 'Theek',
      time: '12:02 PM',
      isMine: true,
    },
    {
      message: '.',
      time: '12:02 PM',
      isMine: true,
    },
  ];

  // useEffect(() => {
  //   getChatHandler();
  // }, [getChatHandler]);

  const getChatHandler = async () => {
    const params = {
      senderId: '658ee4bcae3b8e6e08e086f9',
      receiverId: user._id,
      page: 1,
      pageSize: 30,
    };
    try {
      const response = await getChat(params);
      // console.log('response============ : ', response.data);
      if (response.data.status === 200) {
        setApiData(response.data.messages.reverse());
      } else {
        console.log('error ============== : ', response.data);
      }
    } catch (error) {
      console.log('error ============== : ', error);
    }
  };
  const sendMessageHandler = async () => {
    const params = {
      senderId: '658ee4bcae3b8e6e08e086f9',
      receiverId: user._id,
      message: message,
    };
    try {
      const response = await sendMessage(params);
      if (response.data.status === 200) {
        setMessage('');
        getChatHandler();
      } else {
        console.log('error ============== : ', response.data);
      }
    } catch (error) {
      console.log('error ============== : ', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        profilePic={user.pic}
        name={user.username}
        navigation={navigation}
      />
      <FlatList
        contentContainerStyle={styles.flatListStyle}
        data={messages}
        renderItem={({item}) => <Message item={item} />}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter Message"
            style={styles.input}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.iconView}>
            <Image
              source={ImageSet.attachments}
              style={styles.attachIconStyle}
            />
          </TouchableOpacity>
          {!message && (
            <TouchableOpacity style={styles.iconView}>
              <Image source={ImageSet.camera} style={styles.cameraIconStyle} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.micView}
          onPress={!message ? null : () => sendMessageHandler()}>
          <Image
            source={message ? ImageSet.send : ImageSet.microphone}
            style={styles.micIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  flatListStyle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 5,
    borderRadius: 30,
  },
  input: {
    borderColor: Colors.lightgray,
    flex: 1,
    paddingHorizontal: 15,
  },
  micView: {
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  iconView: {
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  micIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  cameraIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.lightgray,
  },
  attachIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.lightgray,
    transform: [{rotate: '270deg'}],
  },
});
