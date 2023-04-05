import styled from "styled-components";
import { Users } from "styled-icons/heroicons-solid";
import { Add } from "styled-icons/material";


export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 10px 9.5px 0 16px;
    background-color: var(--secondary);
`;

export const Category = styled.div`
    height: 42px;
    display: flex;
    align-items: center;

    >span{
        margin-left: 9px;
        font-size: 15px;
        font-weight: bold;
        color: var(--white);
    }

    &:hover,
    &.active {
        background-color: var(--quinary);
        border-radius: 5px;
    }
`;

export const UsersIcon = styled(Users)`
    width: 24px;
    height: 24px;

    color: var(--symbol);
`;

export const Wrapper = styled.div`
display: flex;

align-items: center;
justify-content: space-between;

margin-bottom: 6px;
padding: 18px 8px 4px 18px;

    > span{
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
        &:hover{
            color: var(--white);
        }
    }
`;

export const AddIcon = styled(Add)`
width: 21px;
height: 21px;

color: var(--symbol);
cursor: pointer;
`;