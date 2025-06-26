import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Server, ServerContextType } from '../types';

const ServerContext = createContext<ServerContextType | undefined>(undefined);

interface ServerProviderProps {
  children: ReactNode;
}

export const ServerProvider: React.FC<ServerProviderProps> = ({ children }) => {
  const [servers, setServers] = useState<Server[]>([
    {
      id: '1',
      name: 'Home',
      isHome: true,
    },
    {
      id: '2',
      name: 'Gaming',
      hasNotifications: true,
    },
    {
      id: '3',
      name: 'Study',
      mentions: 3,
    },
    {
      id: '4',
      name: 'Work',
    },
    {
      id: '5',
      name: 'Music',
    },
    {
      id: '6',
      name: 'Sports',
    },
    {
      id: '7',
      name: 'Tech',
    },
    {
      id: '8',
      name: 'Art',
    },
    {
      id: '9',
      name: 'Books',
    },
    {
      id: '10',
      name: 'Travel',
    },
    {
      id: '11',
      name: 'Food',
    },
    {
      id: '12',
      name: 'Fitness',
    },
    {
      id: '13',
      name: 'News',
      mentions: 72,
    },
    {
      id: '14',
      name: 'Movies',
    },
    {
      id: '15',
      name: 'Science',
    },
  ]);

  const [currentServer, setCurrentServer] = useState<Server | null>(servers[0]);

  const addServer = (server: Server) => {
    setServers(prev => [...prev, server]);
  };

  const removeServer = (serverId: string) => {
    setServers(prev => prev.filter(server => server.id !== serverId));
    if (currentServer?.id === serverId) {
      setCurrentServer(servers[0] || null);
    }
  };

  const value: ServerContextType = {
    servers,
    currentServer,
    setCurrentServer,
    addServer,
    removeServer,
  };

  return (
    <ServerContext.Provider value={value}>
      {children}
    </ServerContext.Provider>
  );
};

export const useServer = (): ServerContextType => {
  const context = useContext(ServerContext);
  if (context === undefined) {
    throw new Error('useServer must be used within a ServerProvider');
  }
  return context;
}; 