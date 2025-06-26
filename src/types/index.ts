export interface User {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
  status?: 'online' | 'idle' | 'dnd' | 'offline';
  customStatus?: string;
}

export interface Server {
  id: string;
  name: string;
  icon?: string;
  hasNotifications?: boolean;
  mentions?: number;
  isHome?: boolean;
}

export interface Channel {
  id: string;
  name: string;
  type: 'text' | 'voice' | 'category';
  isPrivate?: boolean;
  unreadCount?: number;
  lastMessage?: Message;
}

export interface Message {
  id: string;
  content: string;
  author: User;
  timestamp: Date;
  edited?: boolean;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  url: string;
  name: string;
  size: number;
  type: string;
}

export interface ServerContextType {
  servers: Server[];
  currentServer: Server | null;
  setCurrentServer: (server: Server) => void;
  addServer: (server: Server) => void;
  removeServer: (serverId: string) => void;
}

export interface ChannelContextType {
  channels: Channel[];
  currentChannel: Channel | null;
  setCurrentChannel: (channel: Channel) => void;
  addChannel: (channel: Channel) => void;
  removeChannel: (channelId: string) => void;
}

export interface UserContextType {
  currentUser: User | null;
  users: User[];
  setCurrentUser: (user: User) => void;
  updateUserStatus: (userId: string, status: User['status']) => void;
} 