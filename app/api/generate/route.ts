import { NextResponse } from 'next/server';
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
        imageUrl,
        prompt,
        style,
        timestamp: new Date().toISOString()
      },
      message: '图片生成成功'
    });
  } catch (error) {
    console.error('Error in generate route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : '图片生成失败'
      },
      { status: 500 }
    );
  }
} 