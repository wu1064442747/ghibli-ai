import { GenerateImageParams, CreateCharacterParams } from '@/types';

const STABILITY_API_KEY = process.env.STABLE_DIFFUSION_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const STABILITY_API_ENDPOINT = process.env.STABILITY_API_ENDPOINT;
const OPENAI_API_ENDPOINT = process.env.OPENAI_API_ENDPOINT;

// 生成图片的提示词模板
const getGhibliPrompt = (prompt: string, style: string) => {
  const basePrompt = `Create a Ghibli-style illustration of ${prompt}. The image should have the following characteristics:
- Soft, warm color palette
- Detailed hand-drawn appearance
- Whimsical and magical atmosphere
- Studio Ghibli's signature art style
- High quality and detailed background
- Characteristic Ghibli lighting and shadows`;

  const styleSpecificPrompts = {
    'ghibli': basePrompt,
    'spirited-away': `${basePrompt} Specifically in the style of Spirited Away, with its distinctive character designs and magical bathhouse elements.`,
    'totoro': `${basePrompt} Specifically in the style of My Neighbor Totoro, with its gentle countryside settings and adorable character designs.`,
    'howl': `${basePrompt} Specifically in the style of Howl's Moving Castle, with its steampunk elements and magical transformations.`
  };

  return styleSpecificPrompts[style as keyof typeof styleSpecificPrompts] || basePrompt;
};

// 生成角色描述的提示词模板
const getCharacterPrompt = (params: CreateCharacterParams) => {
  return `Create a detailed character description in the style of Studio Ghibli for the following character:
Name: ${params.name}
Age: ${params.age}
Role: ${params.role}
Initial Description: ${params.description}
Personality Traits: ${params.personality.join(', ')}

Please provide:
1. A detailed physical description
2. A rich backstory that fits the Ghibli universe
3. Character motivations and goals
4. Relationships with other potential characters
5. Magical or special abilities (if any)
6. Character development arc

Format the response in a clear, narrative style that captures the whimsical and emotional depth of Ghibli characters.`;
};

export async function generateImageWithStability(prompt: string) {
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
            text: getGhibliPrompt(prompt, 'ghibli'),
            weight: 1
          },
          {
            text: "blurry, low quality, distorted, deformed, ugly, bad anatomy, bad proportions",
            weight: -1
          }
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        samples: 1,
        steps: 30,
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

export async function generateCharacterWithOpenAI(params: CreateCharacterParams) {
  try {
    const response = await fetch(`${OPENAI_API_ENDPOINT}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a creative writer specializing in creating rich, detailed character descriptions in the style of Studio Ghibli films.'
          },
          {
            role: 'user',
            content: getCharacterPrompt(params)
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData.choices[0].message.content;
  } catch (error) {
    console.error('Error generating character description:', error);
    throw error;
  }
} 