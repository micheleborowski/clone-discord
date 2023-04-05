import React from 'react';

import * as S from './styles';

const ActiveList: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Ativo Agora</S.Title>
      <S.Wrapper>
        <S.SubTitle>Por enquanto está quieto</S.SubTitle>
        <S.Text>Quando um(a) amigo(a) começa uma atividade, como jogar um jogo ou bater papo por voz, mostraremos aqui!</S.Text>
      </S.Wrapper>
    </S.Container>
  );
};

export default ActiveList;