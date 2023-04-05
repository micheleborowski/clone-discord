import styled from "styled-components";

import { Search } from 'styled-icons/material';


export const Container = styled.div`
  width: 100%;
  padding: 0 25px;
  margin-top: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 35px;
  background-color: var(--tertiary);
  border-radius: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;

  background-color: var(--tertiary);
  color: var(--white);
  border-radius: 3px;
  padding: 0 8px;
  line-height: 32px;
  font-size: 15px;
  
  position: relative;
  &::placeholder {
    color: var(--gray);
  }
  ~ svg {
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(Search)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  margin-right: 3px;
`;
