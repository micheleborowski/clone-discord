import React from "react";

import * as S from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <S.Container>
      <S.UsersIcon />
      <S.Title> Amigos </S.Title>
      <S.Separator />
      <S.Options>
        <S.Option>Disponível</S.Option>
        <S.Option>Todos</S.Option>
        <S.Option>Pendente</S.Option>
        <S.Option>Bloqueado</S.Option>
        <S.AddOption>Adicionar amigo</S.AddOption>
      </S.Options>
    </S.Container>
  );
};
export default ChannelInfo;
