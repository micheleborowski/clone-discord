import React from "react";

import * as S from "./styles";

export interface Props {
  username: string;
}

export interface PropsContainer {
  isChannelData: boolean;
}

export interface PropsAvatar {
  isOnline: boolean;
}

const ChannelButton: React.FC<Props & PropsAvatar & PropsContainer> = ({ isOnline, username, isChannelData }) => {
  return (
    <S.Container isChannelData={isChannelData}>
      <div>
        <S.Avatar isOnline={isOnline} />
        <div>
          <S.Text isChannelData={isChannelData}>{username}</S.Text>
        </div>
      </div>
      {isChannelData && (
        <div>
          <S.DivIcon >
            <S.MessageIcon />
          </S.DivIcon>
          <S.DivIcon >
            <S.OptionslIcon />
          </S.DivIcon>
        </div>
      )}
    </S.Container>
  );
};
export default ChannelButton;
