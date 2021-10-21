import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import LogoSvg from '../../assets/logo.svg'

import { useAuth } from '../../hooks/auth';
import { UserPhoto } from '../UserPhoto'

export function Header() {
  const { user, signOut } = useAuth()

  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        <TouchableOpacity
          onPress={signOut}
        >
          {
            user &&
            <Text style={styles.logoutText}>Sair</Text>
          }
        </TouchableOpacity>
        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
};
