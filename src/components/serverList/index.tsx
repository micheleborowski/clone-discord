import React from "react";
import * as S from "./styles";
import ServerButton from "../serverButton";

const ServerList: React.FC = () => {
  return (
    <S.Container>
      <ServerButton isHome />
      <S.Separator />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={72} />
      <ServerButton />
      <ServerButton />
    </S.Container>
  );
};
export default ServerList;
