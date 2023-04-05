import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
`;

export const ListWrapper = styled.div``;

export const DivText = styled.div`
  margin: 16px 20px 8px 30px;
`;

export const Text = styled.span`  
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  
  color: var(--gray);
  
  &:hover{
      color: var(--white);
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: auto;

  background-color: var(--white);
  opacity: 0.1;
  margin: 0 13px;
`;

export const ChannelList = styled.div``;



export const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 57px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--chat-input);
  position: relative;
  &::placeholder {
    color: var(--gray);
  }
  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--gray);
`;