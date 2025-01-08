import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/prifle-store';

const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryBottom}
        onPress={() => useProfileStore.setState({name: 'Didier Pereira'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryBottom}
        onPress={() =>
          useProfileStore.setState({email: 'didier@jobchain.com'})
        }>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryBottom}
        onPress={() => changeProfile('Jon Doe', 'jondoe@gmail.com')}>
        <Text>Volver a Jon</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
