import { GenerateImageParams, CreateCharacterParams, ApiResponse, ShareParams } from '@/types';

const STABILITY_API_KEY = 'sk-rD3OLfy50KwPFZS1vpSXE0E1vvILE8lETVtfEh0u2mGLhon5';
const STABILITY_API_URL = 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image';

// 生成图片的提示词模板
const getGhibliPrompt = (prompt: string) => {
  return `Create a Ghibli-style illustration of ${prompt}. The image should have the following characteristics:
- Soft, warm color palette
- Detailed hand-drawn appearance
- Whimsical and magical atmosphere
- Studio Ghibli's signature art style
- High quality and detailed background
- Characteristic Ghibli lighting and shadows`;
};

export async function generateImage(params: GenerateImageParams): Promise<ApiResponse<{ imageUrl: string }>> {
  try {
    const enhancedPrompt = params.style === 'ghibli' ? getGhibliPrompt(params.prompt) : `${params.prompt}, ${params.style} style`;

    const response = await fetch(STABILITY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${STABILITY_API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: enhancedPrompt,
            weight: 1,
          },
        ],
        cfg_scale: 7,
        steps: 30,
        width: 1024,
        height: 1024,
      }),
    });

    if (!response.ok) {
      throw new Error(`Stability API error: ${response.statusText}`);
    }

    const result = await response.json();
    const base64Image = result.artifacts[0].base64;
    const imageUrl = `data:image/png;base64,${base64Image}`;

    return {
      success: true,
      data: {
        imageUrl,
      },
    };
  } catch (error) {
    console.error('生成图片错误:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '生成图片失败，请重试',
    };
  }
}

export async function generateBatchImages(params: {
  prompts: string[];
  style: string;
  generationParams?: GenerateImageParams['generationParams'];
}): Promise<ApiResponse<{ imageUrls: string[] }>> {
  try {
    const response = await fetch('/api/generate/batch', {
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
      message: error instanceof Error ? error.message : '批量图片生成失败',
    };
  }
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