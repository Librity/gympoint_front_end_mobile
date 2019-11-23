import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/student/actions';

export default function SignOutButton() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    console.tron.log('useHandleSignOut');
    dispatch(signOut());
  };

  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  );
}
