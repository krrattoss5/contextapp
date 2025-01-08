import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useCountetStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const value = useCountetStore(state => state.count);
  const increment = useCountetStore(state => state.incrementBy);
  const decrement = useCountetStore(state => state.decrementBy);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Count ${value}`,
    });
  }, [navigation, value]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count:{value}</Text>

      <Pressable style={styles.primaryBottom} onPress={() => increment(1)}>
        <Text>+1</Text>
      </Pressable>

      <Pressable style={styles.primaryBottom} onPress={() => decrement(1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
