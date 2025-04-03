import { GenerateImageParams } from '@/types';

const STABILITY_API_KEY = process.env.STABLE_DIFFUSION_API_KEY;
const STABILITY_API_ENDPOINT = process.env.STABILITY_API_ENDPOINT;

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

export async function generateImageWithStability(params: GenerateImageParams) {
  try {
    const response = await fetch(`${STABILITY_API_ENDPOINT}/generation/stable-diffusion-xl-1024-v1-0/text-to-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${STABILITY_API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: getGhibliPrompt(params.prompt),
            weight: 1
          },
          {
            text: "blurry, low quality, distorted, deformed, ugly, bad anatomy, bad proportions",
            weight: -1
          }
        ],
        cfg_scale: params.generationParams?.cfg_scale ?? 7,
        height: params.generationParams?.height ?? 1024,
        width: params.generationParams?.width ?? 1024,
        samples: 1,
        steps: params.generationParams?.steps ?? 30,
      }),
    });

    if (!response.ok) {
      throw new Error(`Stability API error: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData.artifacts[0].base64;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
} 