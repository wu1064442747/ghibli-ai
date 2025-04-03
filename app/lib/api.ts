import { GenerateImageParams, CreateCharacterParams, ApiResponse, ShareParams } from '@/types';

export async function generateImage(params: GenerateImageParams): Promise<ApiResponse<{ imageUrl: string }>> {
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
    console.error('生成图片请求失败:', error);
    return {
      success: false,
      message: '生成图片请求失败，请重试',
    };
  }
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
  name: string;
  description: string;
  age: string;
  role: string;
  personality: string[];
  generatedDescription: string;
  imageUrl: string;
}>> {
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
    console.error('创建角色请求失败:', error);
    return {
      success: false,
      message: '创建角色请求失败，请重试',
    };
  }
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
} 