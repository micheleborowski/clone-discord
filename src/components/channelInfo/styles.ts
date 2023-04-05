import styled from "styled-components";
import { Users } from "styled-icons/heroicons-solid"

export const Container = styled.div`
    grid-area: CI;    
    display: flex;
    align-items: center;
    padding: 0 17px;

    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;

`;

export const UsersIcon = styled(Users)`
    width: 24px;
    height: 24px;

    color: var(--symbol);
`;

export const Title = styled.div`
    margin-left: 9px;

    font-size: 15px;
    font-weight: bold;
    color: var(--white);
`;

export const Separator = styled.div`
    height: 24px;
    width: 1px;

    background-color: var(--white);
    opacity: 0.1;
    margin: 0 13px;
`;

export const Options = styled.div`
    width: auto;
    display: flex;
    justify-content: flex-start;
`;

export const Option = styled.div`
    margin: 0 8px;
    padding: 2px 8px;

    font-size: 15px;
    color: var(--gray);
    cursor: pointer;

    &:hover{
        background-color: var(--gray);
        color: var(--white);
        border-radius: 4px;
    }
`;

export const AddOption = styled.div`
    margin: 0 8px;
    padding: 2px 8px;

    font-size: 15px;
    color: var(--white);
    cursor: pointer;
    background-color: var(--green);
    border-radius: 4px;
`;