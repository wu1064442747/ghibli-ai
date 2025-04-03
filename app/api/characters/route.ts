import { NextResponse } from 'next/server';
import { CreateCharacterParams } from '@/types';
import { generateCharacterWithOpenAI } from '@/lib/ai';
import { generateImageWithStability } from '@/lib/stability';

export async function POST(request: Request) {
  try {
    const data: CreateCharacterParams = await request.json();
    const { name, description, age, role, personality } = data;

    // 使用 OpenAI 生成角色详细描述
    const generatedDescription = await generateCharacterWithOpenAI({
      name,
      description,
      age,
      role,
      personality,
    });

    // 使用 Stability AI 生成角色图片
    const imagePrompt = `A ${age} ${role} character in Ghibli style, ${description}, ${personality.join(', ')}`;
    const imageUrl = await generateImageWithStability({
      prompt: imagePrompt,
      style: 'ghibli',
    });

    // 返回生成的角色信息
    return NextResponse.json({
      success: true,
      data: {
        name,
        description: generatedDescription,
        age,
        role,
        personality,
        imageUrl,
      },
    });
  } catch (error) {
    console.error('角色创建错误:', error);
    return NextResponse.json(
      { success: false, message: '角色创建失败，请重试' },
      { status: 500 }
    );
  }
} 