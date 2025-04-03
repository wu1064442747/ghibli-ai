import { NextResponse } from 'next/server';
import { GenerateImageParams } from '@/types';
import { generateImageWithStability } from '@/lib/stability';

export async function POST(request: Request) {
  try {
    console.log('开始处理图片生成请求');
    const data: GenerateImageParams = await request.json();
    console.log('收到的参数:', data);

    if (!process.env.STABLE_DIFFUSION_API_KEY) {
      console.error('API密钥未配置');
      throw new Error('Stability AI API key is not configured');
    }

    // 使用 Stability AI 生成图片
    console.log('调用Stability AI API...');
    const imageUrl = await generateImageWithStability(data);
    console.log('图片生成成功');

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
    const errorMessage = error instanceof Error ? error.message : '图片生成失败，请重试';
    console.error('错误详情:', errorMessage);
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
} 