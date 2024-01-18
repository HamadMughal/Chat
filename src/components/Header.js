import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constents/colors';
import {ImageSet} from '../constents/Images';

const Header = props => {
  const {centeralText, profilePic, name, navigation} = props;
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      {centeralText ? (
        <Text style={styles.HeaderText}>{centeralText}</Text>
      ) : (
        <>
          <View style={styles.profileView}>
            <TouchableNativeFeedback
              onPress={onPressBack}
              background={TouchableNativeFeedback.Ripple(
                Colors.gray10,
                false,
                35,
              )}>
              <View style={styles.backButton}>
                <Image
                  source={ImageSet.backArrow}
                  style={styles.backArrowStyle}
                />
                <Image
                  source={profilePic ? profilePic : ImageSet.userDummyProfile}
                  style={styles.profileImageStyle}
                />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(Colors.gray10, false)}>
              <View style={styles.nameView}>
                <Text style={styles.nameText} numberOfLines={1}>
                  {name}
                </Text>
                <Text style={styles.seenText} numberOfLines={1}>
                  Last Seen today at 12:00 PM
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.actionView}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(Colors.gray10, true)}>
              <View style={styles.actionButton}>
                <Image source={ImageSet.video} style={styles.actionIconStyle} />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(Colors.gray10, true)}>
              <View style={styles.actionButton}>
                <Image source={ImageSet.call} style={styles.actionIconStyle} />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(Colors.gray10, true)}>
              <View style={styles.actionButton}>
                <Image source={ImageSet.more} style={styles.actionIconStyle} />
              </View>
            </TouchableNativeFeedback>
          </View>
        </>
      )}
    </View>
  );
};
// Header.defaultProps = {
//   centeralText: 'Chat Room',
// };
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
    padding: 3,
    position: 'absolute',
    left: 2,
    alignItems: 'center',
    width: '63%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  actionView: {
    flex: 1,
    flexDirection: 'row',
    padding: 3,
    position: 'absolute',
    right: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '35%',
  },
  actionButton: {
    padding: 5,
    borderRadius: 20,
  },

  profileImageStyle: {
    height: 35,
    width: 35,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Colors.white,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  nameView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    padding: 3,
  },
  nameText: {
    color: Colors.white,
    fontSize: 18,
  },
  seenText: {
    color: Colors.white,
    fontSize: 12,
  },
  HeaderText: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
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
