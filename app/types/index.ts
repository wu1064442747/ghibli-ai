export interface GeneratedImage {
<<<<<<< HEAD
=======
  id: string;
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
  imageUrl: string;
  prompt: string;
  style: string;
  timestamp: string;
<<<<<<< HEAD
}

export interface Character {
=======
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
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
  name: string;
  description: string;
  age: string;
  role: string;
<<<<<<< HEAD
  personality: string;
  generatedDescription?: string;
  imageUrl?: string;
}

export interface Resource {
=======
  personality: string[];
  generatedDescription?: string;
  imageUrl?: string;
  timestamp: string;
  template?: boolean;
}

export interface Resource {
  id: string;
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
<<<<<<< HEAD
}

export interface Tutorial {
=======
  url?: string;
}

export interface Tutorial {
  id: string;
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
  title: string;
  description: string;
  duration: string;
  level: string;
<<<<<<< HEAD
}

export interface Prompt {
  title: string;
  content: string;
  tags: string[];
}

export interface PromptCategory {
  name: string;
=======
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
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
  prompts: Prompt[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
<<<<<<< HEAD
=======
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
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
} 