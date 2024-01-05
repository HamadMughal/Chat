import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constents/colors';
import {ImageSet} from '../constents/Images';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profileView}>
        <Image source={ImageSet.backArrow} style={styles.backArrowStyle} />
        <Image
          source={ImageSet.userDummyProfile}
          style={styles.profileImageStyle}
        />
        <Text style={styles.nameText} numberOfLines={1}>
          Hamad Amin
        </Text>
      </View>

      <View style={styles.actionView}>
        <Image source={ImageSet.video} style={styles.actionIconStyle} />
        <Image source={ImageSet.call} style={styles.actionIconStyle} />
        <Image source={ImageSet.more} style={styles.actionIconStyle} />
      </View>
      <Text style={styles.HeaderText}>Chat Room</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: Colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  profileView: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    padding: 3,
    position: 'absolute',
    left: 5,
    alignItems: 'center',
    width: '63%',
  },
  actionView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    padding: 3,
    position: 'absolute',
    right: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '35%',
  },
  profileImageStyle: {
    height: 35,
    width: 35,
    tintColor: Colors.white,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Colors.white,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  nameText: {
    flex: 1,
    color: Colors.white,
    fontSize: 18,
    marginLeft: 10,
  },
  HeaderText: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  backArrowStyle: {
    height: 22,
    width: 22,
    tintColor: Colors.white,
  },
  actionIconStyle: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
});
