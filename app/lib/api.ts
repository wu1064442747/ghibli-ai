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
    return {
      success: false,
      message: error instanceof Error ? error.message : '生成图片失败',
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

export async function createCharacter(params: CreateCharacterParams): Promise<ApiResponse<{ imageUrl: string }>> {
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
      message: error instanceof Error ? error.message : '创建角色失败',
    };
  }
}

export async function share(params: ShareParams): Promise<ApiResponse<{ shareUrl: string }>> {
  try {
    const response = await fetch('/api/share', {
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
      message: error instanceof Error ? error.message : '分享失败',
    };
  }
} 