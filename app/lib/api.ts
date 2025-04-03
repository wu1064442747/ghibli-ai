import { GenerateImageParams, CreateCharacterParams, ApiResponse, ShareParams } from '@/types';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

export async function generateImage(params: { prompt: string; style: string }): Promise<ApiResponse<{ imageUrl: string }>> {
  try {
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

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : '图片生成失败',
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

export async function createCharacter(params: { name: string; description: string }): Promise<ApiResponse<{ imageUrl: string }>> {
  try {
    const response = await fetch('/api/character', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error('角色创建失败');
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : '角色创建失败',
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