import React from "react";
import { Avatar, Container, DivIcon, MessageIcon, OptionslIcon, Text } from "./styles";
import { User } from "../../types";

export interface Props {
  username: string;
  user?: User;
}

export interface PropsContainer {
  isChannelData: boolean;
}

export interface PropsAvatar {
  isOnline: boolean;
}

const ChannelButton: React.FC<Props & PropsAvatar & PropsContainer> = ({
  isOnline,
  username,
  isChannelData,
  user
}) => {
  return (
    <Container isChannelData={isChannelData}>
      <div>
        <Avatar isOnline={isOnline} />
        <div>
          <Text isChannelData={isChannelData}>{username}</Text>
        </div>
      </div>
      {isChannelData && (
        <div>
          <DivIcon >
            <MessageIcon />
          </DivIcon>
          <DivIcon >
            <OptionslIcon />
          </DivIcon>
        </div>
      )}
    </Container>
  );
};

export default ChannelButton;
