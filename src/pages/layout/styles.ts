import styled from "styled-components";

// Server List -- SL
// Server Name -- SN
// Channel Options -- CO
// Channel Infor -- CI
// Channel List -- CL
// Channel Data -- CD
// User Info -- UI
// User List -- UL

// columns: deixar auto a terceira coluna para ficar responsiva, o resto fixo

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 71px 240px auto 358px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';
    
    height: 100vh;
`;