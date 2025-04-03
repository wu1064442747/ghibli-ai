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
  name: string;
  description: string;
  age: string;
  role: string;
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
} 