import styled from 'styled-components';
import { Server } from '../../types';

interface ButtonProps {
  server: Server;
  isSelected?: boolean;
  onClick?: () => void;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.server.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  
  > img {
    width: 24px;
    height: 24px;
  }
  
  .server-initial {
    color: var(--white);
    font-weight: bold;
    font-size: 18px;
  }
  
  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${(props) => (props.server.hasNotifications ? 'inline' : 'none')};
  }
  
  transition: border-radius 0.2s, background-color 0.2s;
  
  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.server.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;

export const MentionsBadge = styled.div`
  background-color: var(--notification);
  width: auto;
  height: 16px;
  padding: 0 4px;
  position: absolute;
  bottom: -4px;
  right: -4px;
  border-radius: 12px;
  border: 4px solid var(--quaternary);
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
`;
