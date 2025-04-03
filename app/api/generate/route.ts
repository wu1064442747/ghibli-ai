import { NextResponse } from 'next/server';
<<<<<<< HEAD
import type { GeneratedImage } from '@/app/types';

export async function POST(request: Request) {
  try {
    const { prompt, style } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, message: '请提供提示词' },
        { status: 400 }
      );
    }

    // 根据选择的风格调整提示词
    let enhancedPrompt = prompt;
    if (style === 'ghibli') {
      enhancedPrompt = `${prompt}, Studio Ghibli style, Hayao Miyazaki style, anime style, soft lighting, detailed background, painterly, hand-drawn animation, whimsical, magical atmosphere`;
    } else if (style === 'watercolor') {
      enhancedPrompt = `${prompt}, watercolor style, soft edges, flowing colors, artistic, Studio Ghibli inspired, gentle brushstrokes, dreamy atmosphere`;
    } else if (style === 'anime') {
      enhancedPrompt = `${prompt}, anime style, cel shading, vibrant colors, detailed, Studio Ghibli inspired, clean lines, expressive`;
    }

    // 添加通用的负面提示词
    const negativePrompt = "ugly, deformed, noisy, blurry, low quality, pixelated, duplicate, text, watermark, signature, blurry, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck";

    const response = await fetch(process.env.STABLE_DIFFUSION_API_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.STABLE_DIFFUSION_API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: enhancedPrompt,
            weight: 1,
          },
          {
            text: negativePrompt,
            weight: -1,
          }
        ],
        cfg_scale: 7, // 提示词引导系数
        steps: 30,    // 生成步数
        width: 1024,
        height: 1024,
        sampler: "K_EULER_ANCESTRAL", // 采样器
        style_preset: "anime",       // 风格预设
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Stability AI API 错误:', errorData);
      throw new Error(`图片生成失败: ${errorData.message || '未知错误'}`);
    }

    const result = await response.json();
    
    // Stability AI 返回 base64 编码的图片
    const imageData = result.artifacts[0].base64;
    const imageUrl = `data:image/png;base64,${imageData}`;

    const generatedImage: GeneratedImage = {
      imageUrl,
      prompt,
      style,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: generatedImage,
    });
  } catch (error) {
    console.error('图片生成错误:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : '图片生成失败，请重试'
=======
import { GenerateImageParams } from '@/types';
import { generateImageWithStability } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const { prompt, style } = await request.json() as GenerateImageParams;

    // 调用 Stability AI API 生成图片
    const base64Image = await generateImageWithStability({ prompt, style });
    
    // 将 base64 图片转换为可访问的 URL
    const imageUrl = `data:image/png;base64,${base64Image}`;

    return NextResponse.json({
      success: true,
      data: {
        imageUrl
      },
      message: '图片生成成功'
    });
  } catch (error) {
    console.error('Error in generate route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : '图片生成失败'
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
      },
      { status: 500 }
    );
  }
} 