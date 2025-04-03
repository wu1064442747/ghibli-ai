import { NextResponse } from 'next/server';
import { GenerateImageParams } from '@/types';
import { generateImageWithStability } from '@/lib/stability';

export async function POST(request: Request) {
  try {
    const data: GenerateImageParams = await request.json();

    // 使用 Stability AI 生成图片
    const imageUrl = await generateImageWithStability(data);

    return NextResponse.json({
      success: true,
      data: {
        imageUrl,
        prompt: data.prompt,
        style: data.style,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('图片生成错误:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : '图片生成失败，请重试'
      },
      { status: 500 }
    );
  }
} 