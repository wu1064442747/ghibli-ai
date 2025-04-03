import { create } from 'zustand';
import { generateImage as apiGenerateImage, createCharacter as apiCreateCharacter } from './api';

export interface Character {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface GeneratedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  style: string;
}

export interface GenerateState {
  isGenerating: boolean;
  generatedImages: GeneratedImage[];
  generateImage: (params: { prompt: string; style: string }) => Promise<void>;
}

export interface CharacterState {
  isCreating: boolean;
  characters: Character[];
  createCharacter: (params: { name: string; description: string }) => Promise<void>;
}

export const useGenerateStore = create<GenerateState>((set) => ({
  isGenerating: false,
  generatedImages: [],
  generateImage: async ({ prompt, style }) => {
    set({ isGenerating: true });
    try {
      const result = await apiGenerateImage({ prompt, style });
      if (result.success && result.data?.imageUrl) {
        set((state) => ({
          generatedImages: [
            {
              id: Date.now().toString(),
              prompt,
              imageUrl: result.data!.imageUrl,
              style,
            },
            ...state.generatedImages,
          ],
        }));
      }
    } finally {
      set({ isGenerating: false });
    }
  },
}));

export const useCharacterStore = create<CharacterState>((set) => ({
  isCreating: false,
  characters: [],
  createCharacter: async ({ name, description }) => {
    set({ isCreating: true });
    try {
      const result = await apiCreateCharacter({
        name,
        description,
        age: 'Unknown',
        role: 'Character',
        personality: ['Mysterious'],
      });
      if (result.success && result.data?.imageUrl) {
        set((state) => ({
          characters: [
            {
              id: Date.now().toString(),
              name,
              description,
              imageUrl: result.data!.imageUrl,
            },
            ...state.characters,
          ],
        }));
      }
    } finally {
      set({ isCreating: false });
    }
  },
})); 