import React from 'react';

import * as S from './styles';

import michele from "../../assets/michele.png"

const UserInfo: React.FC = () => {
  return (
    <S.Container>
      <S.Profile>
        <S.Avatar >
          <img src={michele} alt="user"/>
        </S.Avatar>
        <S.UserData>
          <strong>Michele Ramos</strong>
          <span>#4685</span>
        </S.UserData>
      </S.Profile>

      <S.Icons>
        <S.MicIcon />
        <S.HeadphoneIcon />
        <S.SettingsIcon />
      </S.Icons>
    </S.Container>
  );
};

export default UserInfo;