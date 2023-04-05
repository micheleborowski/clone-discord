import styled from 'styled-components';

import { PropsAvatar, PropsContainer } from '.';
import { Message } from '@styled-icons/boxicons-solid/Message';
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical';

export const Container = styled.div<PropsContainer>`
  height:  ${(props) => (props.isChannelData ? '62px' : '42px')};

  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isChannelData ? 'space-between' : 'flex-start')};

  cursor: pointer;
  padding: 5px 3px;

  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }
  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
  }
`;
export const Text = styled.span<PropsContainer>`
  margin-left: 5px;
  color: var(--senary);
  color: ${(props) => (props.isChannelData ? 'var(--white)' : 'var(--gray)')}
`
export const Avatar = styled.div<PropsAvatar>`
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
width: 32px;
height: 32px;
border-radius: 50%;
margin-bottom: 8px;
background-color: var(--primary);
position: relative;
cursor: pointer;
> img {
  width: 24px;
  height: 24px;
}
&::after {
  background-color: ${(props) => (props.isOnline ? 'var(--online)' : 'var(--offline)')};

  width: 2px;
  height: 10px;

  padding: 0 4px;
  position: absolute;
  bottom: -4px;
  right: -4px;

  border-radius: 100%;
  border: 4px solid var(--quaternary);
  
  text-align: right;
  font-size: 13px;
  font-weight: bold;
  
  color: var(--white);
  content: '';
  display: inline;
}
`;

export const DivIcon = styled.div`
  width: 32px;
  height: 32px;

  background-color: var(--quaternary);
  border-radius: 50%;

  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageIcon = styled(Message)`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const OptionslIcon = styled(ThreeDotsVertical)`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;