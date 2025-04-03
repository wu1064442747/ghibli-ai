export interface GeneratedImage {
  id: string;
  imageUrl: string;
  prompt: string;
  style: string;
  timestamp: string;
  isFavorite?: boolean;
  generationParams?: {
    cfg_scale: number;
    steps: number;
    width: number;
    height: number;
  };
}

export interface Character {
  id: string;
  name: string;
  description: string;
  age: string;
  role: string;
  personality: string[];
  generatedDescription?: string;
  imageUrl?: string;
  timestamp: string;
  template?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
  url?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  videoUrl?: string;
  steps?: string[];
}

export interface Prompt {
  id: string;
  title: string;
  content: string;
  tags: string[];
  category: string;
  usageCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  prompts: Prompt[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface GenerateImageParams {
  prompt: string;
  style: string;
  generationParams?: {
    cfg_scale: number;
    steps: number;
    width: number;
    height: number;
  };
}

export interface CreateCharacterParams {
  name: string;
  description: string;
  age: string;
  role: string;
  personality: string[];
}

export interface ShareParams {
  type: 'image' | 'character';
  id: string;
  title: string;
  description: string;
  imageUrl: string;
} 