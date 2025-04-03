import { NextResponse } from 'next/server';
import { GenerateImageParams } from '@/types';
import { generateImageWithStability } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const { prompts, style, generationParams } = await request.json() as {
      prompts: string[];
      style: string;
      generationParams?: GenerateImageParams['generationParams'];
    };

    // 并行生成多张图片
    const imagePromises = prompts.map((prompt) =>
      generateImageWithStability({
        prompt,
        style,
        generationParams,
      })
    );

    const base64Images = await Promise.all(imagePromises);
    
    // 将 base64 图片转换为可访问的 URL
    const imageUrls = base64Images.map(
      (base64Image) => `data:image/png;base64,${base64Image}`
    );

    return NextResponse.json({
      success: true,
      data: {
        imageUrls,
      },
      message: '批量图片生成成功'
    });
  } catch (error) {
    console.error('Error in batch generate route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : '批量图片生成失败'
      },
      { status: 500 }
    );
  }
} 