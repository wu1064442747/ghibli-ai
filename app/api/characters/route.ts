import { NextResponse } from 'next/server';
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
      { status: 500 }
    );
  }
} 