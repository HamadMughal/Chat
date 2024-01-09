import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constents/colors';

const Card = props => {
  const {item, goToChat} = props;
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => goToChat(item)}>
      <Image source={item.pic} style={styles.profilePicStyle} />
      <View style={styles.nameContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.messageText} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.timeText}>{item.time}</Text>
        <View style={styles.counterView}>
          <Text style={styles.CounterText}>{'1'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicStyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  nameContainer: {
    marginLeft: 10,
    flex: 1,
    height: 40,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  messageText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.lightgray,
  },
  counterContainer: {
    height: 40,
    width: '30%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 12,
    color: Colors.lightgray,
  },
  counterView: {
    height: 20,
    width: 20,
    backgroundColor: Colors.green,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  CounterText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
