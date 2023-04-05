import React from 'react'

import * as S from './styles'

const Search = () => {
    return (
        <S.Container>
            <S.InputWrapper>
                <S.Input placeholder='Buscar'></S.Input>
                <S.InputIcon />
            </S.InputWrapper>
        </S.Container>
    )
}
export default Search;