export const APP_NAME = 'Discord Clone';
export const APP_VERSION = '1.0.0';

export const API_ENDPOINTS = {
  USERS: '/api/users',
  SERVERS: '/api/servers',
  CHANNELS: '/api/channels',
  MESSAGES: '/api/messages',
} as const;

export const STORAGE_KEYS = {
  THEME: 'discord-theme',
  USER_PREFERENCES: 'discord-user-preferences',
  RECENT_SERVERS: 'discord-recent-servers',
} as const;

export const USER_STATUSES = {
  ONLINE: 'online',
  IDLE: 'idle',
  DND: 'dnd',
  OFFLINE: 'offline',
} as const;

export const CHANNEL_TYPES = {
  TEXT: 'text',
  VOICE: 'voice',
  CATEGORY: 'category',
} as const;

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Internal server error. Please try again later.',
} as const; 