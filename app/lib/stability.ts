interface GenerateImageParams {
  prompt: string;
  style?: string;
  generationParams?: {
    cfg_scale?: number;
    steps?: number;
    width?: number;
    height?: number;
  };
}

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

export async function generateImageWithStability({
  prompt,
  style = 'ghibli',
  generationParams = {
    cfg_scale: 7,
    steps: 30,
    width: 1024,
    height: 1024,
  },
}: GenerateImageParams): Promise<string> {
  const apiKey = process.env.STABLE_DIFFUSION_API_KEY;
  if (!apiKey) {
    throw new Error('Stability API key not found');
  }

  // 使用 Ghibli 风格的提示词增强原始提示词
  const enhancedPrompt = style === 'ghibli' ? getGhibliPrompt(prompt) : `${prompt}, ${style} style`;

  const response = await fetch(
    process.env.STABLE_DIFFUSION_API_URL || 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: enhancedPrompt,
            weight: 1,
          },
        ],
        ...generationParams,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Stability API error: ${response.statusText}`);
  }

  const result = await response.json();
  const base64Image = result.artifacts[0].base64;
  return base64Image; // 不再添加 data:image/png;base64, 前缀，由调用方处理
} 