import {StyleSheet} from 'react-native';

export const HomeStyle = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#071611',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  categoryContainer: {
    padding: 10,
  },

  Shopping: {
    height: 150,
    width: 200,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#ff006e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Food: {
    height: 150,
    width: 200,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#3e1f47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HealthCare: {
    height: 150,
    width: 200,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#5bc0be',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Education: {
    height: 150,
    width: 200,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#7209b7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  incomeCard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  incomeCardContent: {
    height: 80,
    width: 180,
    backgroundColor: '#2A3934',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
