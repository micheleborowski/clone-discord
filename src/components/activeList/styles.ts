import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Title = styled.h1`
  color: var(--white);
  margin: 8px 0 16px;
  font-weight: 800;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const SubTitle = styled.h2`
  color: var(--white);
  font-size: 16px;
  line-height: 20px;
`;

export const Text = styled.p`
  color: var(--gray);
  font-size: 14px;
  line-height: 18px;
`;
