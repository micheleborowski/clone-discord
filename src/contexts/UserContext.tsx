import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserContextType } from '../types';

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'guizin',
      isOnline: true,
      status: 'online',
    },
    {
      id: '2',
      name: 'carolina',
      isOnline: true,
      status: 'online',
    },
    {
      id: '3',
      name: 'manuBertanha',
      isOnline: false,
      status: 'offline',
    },
    {
      id: '4',
      name: 'alex_dev',
      isOnline: true,
      status: 'idle',
      customStatus: 'Coding...',
    },
    {
      id: '5',
      name: 'maria_design',
      isOnline: true,
      status: 'dnd',
      customStatus: 'In a meeting',
    },
  ]);

  const [currentUser, setCurrentUser] = useState<User | null>(users[0]);

  const updateUserStatus = (userId: string, status: User['status']) => {
    setUsers(prev => 
      prev.map(user => 
        user.id === userId 
          ? { ...user, status, isOnline: status !== 'offline' }
          : user
      )
    );
  };

  const value: UserContextType = {
    currentUser,
    users,
    setCurrentUser,
    updateUserStatus,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 