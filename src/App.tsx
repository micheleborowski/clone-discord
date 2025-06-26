import React from 'react';
import Layout from "./pages/layout";
import GlobalStyle from "./style";
import { ServerProvider } from './contexts/ServerContext';
import { UserProvider } from './contexts/UserContext';
import ErrorBoundary from './components/errorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ServerProvider>
        <UserProvider>
          <Layout />
          <GlobalStyle />
        </UserProvider>
      </ServerProvider>
    </ErrorBoundary>
  );
}

export default App;
