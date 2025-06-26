import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div<{ size: string; color: string }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '16px';
      case 'large': return '48px';
      default: return '24px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '16px';
      case 'large': return '48px';
      default: return '24px';
    }
  }};
  border: 2px solid transparent;
  border-top: 2px solid ${props => props.color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Text = styled.span`
  color: var(--gray);
  font-size: 14px;
`;

const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  color = 'var(--discord)', 
  text 
}) => {
  return (
    <Container>
      <Spinner size={size} color={color} />
      {text && <Text>{text}</Text>}
    </Container>
  );
};

export default Loading; 