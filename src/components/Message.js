import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constents/colors';
import moment from 'moment';

const Message = props => {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.messageContainer}>
      <View style={item.isMine ? styles.messageViewV2 : styles.messageView}>
        <Text style={item.isMine ? styles.messageTextV2 : styles.messageText}>
          {item.text}
        </Text>
        <View style={styles.timeView}>
          <Text style={item.isMine ? styles.timeTextV2 : styles.timeText}>
            {moment(item.createdAt).format('hh:mm')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    // backgroundColor: 'pink',
    marginBottom: 5,
  },
  messageView: {
    backgroundColor: Colors.white,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    maxWidth: '70%',
  },
  messageViewV2: {
    backgroundColor: Colors.green,
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 14,
    color: Colors.black,
    flex: 1,
  },
  messageTextV2: {
    fontSize: 14,
    color: Colors.white,
    flex: 1,
  },
  timeView: {
    marginLeft: 10,
    // backgroundColor: 'orange',
    justifyContent: 'flex-end',
  },
  timeText: {
    fontSize: 12,
    color: Colors.lightgray,
  },
  timeTextV2: {
    fontSize: 12,
    color: Colors.white,
  },
});
