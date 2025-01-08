import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/prifle-store';
import {useCountetStore} from '../../store/counter-store';

const HomeScreen = () => {
  const value = useCountetStore(state => state.count);
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>Count:{value}</Text>
    </View>
  );
};

export default HomeScreen;
