import { NextResponse } from 'next/server';
<<<<<<< HEAD
import type { Character } from '@/app/types';

export async function POST(request: Request) {
  try {
    const { name, description, age, role, personality } = await request.json();

    if (!name || !description) {
      return NextResponse.json(
        { success: false, message: '请提供角色名称和描述' },
        { status: 400 }
      );
    }

    // 构建角色的完整描述
    const characterPrompt = `
      A Studio Ghibli style character:
      ${name}, ${age} years old, a ${role}.
      ${description}
      Personality: ${personality}
      Style: Detailed character design, soft lighting, Hayao Miyazaki style, full body shot, standing pose, detailed background
    `.trim();

    // 调用 Stability AI API 生成角色图片
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
            text: characterPrompt,
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
      throw new Error('角色图片生成失败');
    }

    const result = await response.json();
    
    // Stability AI 返回 base64 编码的图片
    const imageData = result.artifacts[0].base64;
    const imageUrl = `data:image/png;base64,${imageData}`;

    const character: Character = {
      name,
      description,
      age,
      role,
      personality,
      generatedDescription: characterPrompt,
      imageUrl,
    };

    return NextResponse.json({
      success: true,
      data: character,
    });
  } catch (error) {
    console.error('角色创建错误:', error);
    return NextResponse.json(
      { success: false, message: '角色创建失败，请重试' },
=======
import { CreateCharacterParams } from '@/types';
import { generateCharacterWithOpenAI } from '@/lib/ai';
import { generateImageWithStability } from '@/lib/stability';

export async function POST(request: Request) {
  try {
    const characterParams = await request.json() as CreateCharacterParams;

    // 调用 OpenAI API 生成角色描述
    const generatedDescription = await generateCharacterWithOpenAI(characterParams);

    // 调用 Stability AI API 生成角色图片
    const base64Image = await generateImageWithStability({
      prompt: `A detailed portrait of ${characterParams.name}, ${characterParams.description}`,
      style: 'ghibli'
    });

    // 将 base64 图片转换为可访问的 URL
    const imageUrl = `data:image/png;base64,${base64Image}`;

    return NextResponse.json({
      success: true,
      data: {
        ...characterParams,
        generatedDescription,
        imageUrl
      },
      message: '角色创建成功'
    });
  } catch (error) {
    console.error('Error in characters route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : '角色创建失败'
      },
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
      { status: 500 }
    );
  }
} 