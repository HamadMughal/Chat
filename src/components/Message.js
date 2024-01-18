import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constents/colors';
import moment from 'moment';

const Message = props => {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.messageContainer} activeOpacity={0.5}>
      <View style={item.isMine ? styles.messageViewV2 : styles.messageView}>
        <Text style={item.isMine ? styles.messageTextV2 : styles.messageText}>
          {item.message}
        </Text>
        <View style={styles.timeView}>
          <Text style={item.isMine ? styles.timeTextV2 : styles.timeText}>
            {/* {moment(item.createdAt).format('hh:mm')} */}
            {item.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 5,
  },
  messageView: {
    backgroundColor: Colors.white,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  messageViewV2: {
    backgroundColor: Colors.green,
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  messageText: {
    fontSize: 14,
    color: Colors.black,
    maxWidth: '70%',
  },
  messageTextV2: {
    fontSize: 14,
    color: Colors.white,
    maxWidth: '70%',
  },
  timeView: {
    marginLeft: 10,
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
