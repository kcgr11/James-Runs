
import {
  createStyle,
} from 'src/styles';

export default createStyle({
  listContainer: {
    flex: 1,
    backgroundColor: 'rgba(53,53,53,.9)',
    padding: 10,
    marginBottom: 5,
  },
  selectBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 0,
  },
  profileImageWrapper: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: 120,
    height: 120,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  subText: {
    color: 'white',
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 16,
  },
  iconActive: {
    opacity: 1,
    color: '#478cba',
    fontSize: 40,
    alignSelf: 'center',
    marginRight: 0,
    marginLeft: 0,
  },
  iconInActive: {
    opacity: 1,
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    marginRight: 0,
    marginLeft: 0,
  },
});
