import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon
} from './styles';

import michele from "../../assets/michele.png"

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar >
          <img src={michele} alt="user" />
        </Avatar>
        <UserData>
          <strong>Michele Borowski</strong>
          <span>#4685</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;