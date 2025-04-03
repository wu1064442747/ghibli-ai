import { create } from 'zustand';
import { GeneratedImage, Character, Prompt } from '@/types';

// 图片生成状态
interface GenerateState {
  prompt: string;
  style: string;
  isGenerating: boolean;
  generatedImages: GeneratedImage[];
  favoriteImages: string[]; // 收藏的图片URL
  generationParams: {
    cfg_scale: number;
    steps: number;
    width: number;
    height: number;
  };
  setPrompt: (prompt: string) => void;
  setStyle: (style: string) => void;
  setIsGenerating: (isGenerating: boolean) => void;
  addGeneratedImage: (imageUrl: string) => void;
  clearGeneratedImages: () => void;
  toggleFavorite: (imageUrl: string) => void;
  updateGenerationParams: (params: Partial<GenerateState['generationParams']>) => void;
}

// 角色创建状态
interface CharacterState {
  name: string;
  description: string;
  age: string;
  role: string;
  personality: string[];
  isCreating: boolean;
  createdCharacters: Character[];
  characterTemplates: {
    name: string;
    description: string;
    age: string;
    role: string;
    personality: string[];
  }[];
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setAge: (age: string) => void;
  setRole: (role: string) => void;
  addPersonality: (trait: string) => void;
  removePersonality: (trait: string) => void;
  setIsCreating: (isCreating: boolean) => void;
  addCreatedCharacter: (character: Character) => void;
  clearCreatedCharacters: () => void;
  saveAsTemplate: () => void;
  loadTemplate: (template: CharacterState['characterTemplates'][0]) => void;
}

// 提示词库状态
interface PromptState {
  prompts: Prompt[];
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  addPrompt: (prompt: Prompt) => void;
  removePrompt: (promptId: string) => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  getFilteredPrompts: () => Prompt[];
}

// 创建状态存储
export const useGenerateStore = create<GenerateState>((set, get) => ({
  prompt: '',
  style: 'ghibli',
  isGenerating: false,
  generatedImages: [],
  favoriteImages: [],
  generationParams: {
    cfg_scale: 7,
    steps: 30,
    width: 1024,
    height: 1024,
  },
  setPrompt: (prompt) => set({ prompt }),
  setStyle: (style) => set({ style }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  addGeneratedImage: (imageUrl) =>
    set((state) => ({
      generatedImages: [
        {
          id: Date.now().toString(),
          imageUrl,
          prompt: state.prompt,
          style: state.style,
          timestamp: new Date().toISOString(),
        },
        ...state.generatedImages,
      ],
    })),
  clearGeneratedImages: () => set({ generatedImages: [] }),
  toggleFavorite: (imageUrl) =>
    set((state) => ({
      favoriteImages: state.favoriteImages.includes(imageUrl)
        ? state.favoriteImages.filter((url) => url !== imageUrl)
        : [...state.favoriteImages, imageUrl],
    })),
  updateGenerationParams: (params) =>
    set((state) => ({
      generationParams: { ...state.generationParams, ...params },
    })),
}));

export const useCharacterStore = create<CharacterState>((set, get) => ({
  name: '',
  description: '',
  age: '少年',
  role: '主角',
  personality: [],
  isCreating: false,
  createdCharacters: [],
  characterTemplates: [
    {
      name: '魔法少女',
      description: '一位拥有神秘力量的年轻女孩',
      age: '少女',
      role: '主角',
      personality: ['勇敢', '善良', '好奇'],
    },
    {
      name: '神秘老人',
      description: '一位充满智慧的长者',
      age: '老年',
      role: '导师',
      personality: ['智慧', '神秘', '和蔼'],
    },
  ],
  setName: (name) => set({ name }),
  setDescription: (description) => set({ description }),
  setAge: (age) => set({ age }),
  setRole: (role) => set({ role }),
  addPersonality: (trait) =>
    set((state) => ({
      personality: state.personality.includes(trait)
        ? state.personality
        : [...state.personality, trait],
    })),
  removePersonality: (trait) =>
    set((state) => ({
      personality: state.personality.filter((t) => t !== trait),
    })),
  setIsCreating: (isCreating) => set({ isCreating }),
  addCreatedCharacter: (character) =>
    set((state) => ({
      createdCharacters: [character, ...state.createdCharacters],
    })),
  clearCreatedCharacters: () => set({ createdCharacters: [] }),
  saveAsTemplate: () =>
    set((state) => ({
      characterTemplates: [
        {
          name: state.name,
          description: state.description,
          age: state.age,
          role: state.role,
          personality: state.personality,
        },
        ...state.characterTemplates,
      ],
    })),
  loadTemplate: (template) =>
    set({
      name: template.name,
      description: template.description,
      age: template.age,
      role: template.role,
      personality: template.personality,
    }),
}));

export const usePromptStore = create<PromptState>((set, get) => ({
  prompts: [],
  categories: ['场景', '角色', '氛围', '风格'],
  selectedCategory: '全部',
  searchQuery: '',
  addPrompt: (prompt) =>
    set((state) => ({
      prompts: [...state.prompts, prompt],
    })),
  removePrompt: (promptId) =>
    set((state) => ({
      prompts: state.prompts.filter((p) => p.id !== promptId),
    })),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  getFilteredPrompts: () => {
    const state = get();
    return state.prompts.filter((prompt) => {
      const matchesCategory =
        state.selectedCategory === '全部' ||
        prompt.tags.includes(state.selectedCategory);
      const matchesSearch = prompt.title
        .toLowerCase()
        .includes(state.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  },
})); 