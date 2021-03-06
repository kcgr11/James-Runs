import { StyleSheet } from 'react-native';

import cls from './colors';

const mainStyle = StyleSheet.create({

  h1: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 22,
    color: '#ffffff',
  },
  close: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    width: '100%',
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 22,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'ProximaNova-Bold',
  },
  container: {
    backgroundColor: '#000000',
    flex: 1,
    overflow: 'scroll',
    margin: 'auto',
  },
  search: {
    color: '#ffffff',
    backgroundColor: '#141414',
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    flex: 1,
    height: '100%',
    elevation: 0,
  },
  dateTimePicker: {
    height: 200,
    width: '80%',
    overflow: 'hidden',
    shadowOffset: { width: 5, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderRadius: 20,
    marginBottom: 5,
    padding: 0,
  },
  modalHeader: {
    backgroundColor: '#000000',
    top: 0,
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
  modalWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  manageBtn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
    flexDirection: 'column',
  },
  manageBtnText: {
    color: '#ffffff',
    fontFamily: 'BarlowCondensed-Bold',
    flexWrap: 'wrap',
    fontSize: 18,
  },
  accountHeader: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userProfileImage: {
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  profileImage: {
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  courtImage: {
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  profilePic: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexShrink: 1,
  },
  profileText: {
    display: 'flex',
    color: '#ffffff',
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 20,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  listText: {
    color: '#000000',
    fontFamily: 'BarlowCondensed-Medium',
    flexWrap: 'wrap',
  },
  textFull: {
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: 'BarlowCondensed-Light',
    fontSize: 20,
    lineHeight: 20,
    borderBottomWidth: 0,
    borderBottomColor: '#fff',
    marginBottom: 10,
    padding: 10,
    width: '100%',
    margin: 5,
    height: 50,
    textAlign: 'left',
    elevation: 0,
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 20,
    lineHeight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 3,
    textAlign: 'center',
  },
  inputRow: {
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    height: 90,
  },
  inputContainer: {
    flex: 1,
    padding: 5,
    width: '100%',
  },
  textLabel: {
    color: '#ffffff',
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 14,
    padding: 5,
    paddingBottom: 10,
    textAlign: 'left',
    elevation: 0,
  },
  textNote: {
    color: cls.gray,
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 14,
    padding: 5,
    paddingTop: 0,
    paddingBottom: 10,
    textAlign: 'left',
  },
  textInput: {
    color: '#000000',
    backgroundColor: '#ffffff',
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'left',
    flex: 1,
    elevation: 0,
    borderRadius: 5,
  },
  gameDate: {
    fontFamily: 'BarlowCondensed-Light',
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  gameScore: {
    fontFamily: 'BarlowCondensed-Bold',
    color: '#ffffff',
    fontSize: 26,
    textAlign: 'center',
  },
  gameTitle: {
    fontFamily: 'BarlowCondensed-Bold',
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  boardItem: {
    backgroundColor: '#000000',
    marginBottom: 10,
    padding: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
  },
  message: {
    backgroundColor: '#000000',
    fontFamily: 'BarlowCondensed-Bold',
    color: '#ffffff',
    padding: 5,
    fontSize: 14,
    textAlign: 'center',
    width: '100%',
  },
  filterBtn: {
    flex: 1,
  },
  runLocation: {
    position: 'absolute',
    width: '100%',
    left: 10,
    bottom: 10,
  },
  runLocationText: {
    color: '#ffffff',
    fontFamily: 'BarlowCondensed-Light',
    fontSize: 18,
  },
  startBtn: {
    width: '100%',
    height: '100%',
    backgroundColor: '#044571',
    flexDirection: 'row',
  },
  startBtnText: {
    flex: 1,
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontFamily: 'BarlowCondensed-Light',
    fontSize: 18,
    color: '#ffffff',
    lineHeight: 24,
  },

});

export default mainStyle;
