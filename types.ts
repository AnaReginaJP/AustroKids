export enum Sender {
  User = 'user',
  Bot = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
  timestamp: number;
}

export interface Planet {
  name: string;
  description: string;
  color: string;
  size: string;
  icon: string; // Emoji or image placeholder logic
  gravity: number; // A factor for the physics engine (e.g., 1 is Earth-like)
  rotationSpeed: number; // Visual rotation speed
}