<<<<<<< HEAD
import { ApiResponse, GeneratedImage, Character } from '../types';

interface GenerateImageParams {
  prompt: string;
  style: string;
}

interface CreateCharacterParams {
=======
import { GenerateImageParams, CreateCharacterParams, ApiResponse, ShareParams } from '@/types';

export async function generateImage(params: GenerateImageParams): Promise<ApiResponse<{ imageUrl: string }>> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('图片生成失败');
  }

  return response.json();
}

export async function generateBatchImages(params: {
  prompts: string[];
  style: string;
  generationParams?: GenerateImageParams['generationParams'];
}): Promise<ApiResponse<{ imageUrls: string[] }>> {
  const response = await fetch('/api/generate/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('批量图片生成失败');
  }

  return response.json();
}

export async function createCharacter(params: CreateCharacterParams): Promise<ApiResponse<{
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
  name: string;
  description: string;
  age: string;
  role: string;
<<<<<<< HEAD
  personality: string;
}

export async function generateImage(params: GenerateImageParams): Promise<ApiResponse<GeneratedImage>> {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: '生成图片时发生错误',
    };
  }
}

export async function createCharacter(params: CreateCharacterParams): Promise<ApiResponse<Character>> {
  try {
    const response = await fetch('/api/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: '创建角色时发生错误',
    };
  }
=======
  personality: string[];
  generatedDescription: string;
  imageUrl: string;
}>> {
  const response = await fetch('/api/characters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('角色创建失败');
  }

  return response.json();
}

export async function shareContent(params: ShareParams): Promise<ApiResponse<{
  type: string;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  shareUrl: string;
  timestamp: string;
}>> {
  const response = await fetch('/api/share', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('分享失败');
  }

  return response.json();
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
} 