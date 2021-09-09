import React from 'react';
import {Header} from 'react-native-elements';

interface Props {}

const AppHeader = (props: Props) => {
  return (
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        iconStyle: {color: '#fff'},
      }}
      centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
      rightComponent={{icon: 'notifications', color: '#fff'}}
      containerStyle={{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
      }}
    />
  );
};

export default AppHeader;
