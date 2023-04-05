import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;

    padding: 10px 9.5px 0 16px;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Search = styled.div`
    height: 28px;
    background-color: var(--tertiary);
    border-radius: 3px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    >span{
        font-size: 13px;
        line-height: 24px;
        color: var(--gray);
    }
`;