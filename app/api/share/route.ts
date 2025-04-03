import { NextResponse } from 'next/server';
import { ShareParams } from '@/types';

export async function POST(request: Request) {
  try {
    const { type, id, title, description, imageUrl } = await request.json() as ShareParams;

    // 这里可以添加社交媒体分享功能
    // 例如：生成分享链接、创建社交媒体帖子等
    const shareData = {
      type,
      id,
      title,
      description,
      imageUrl,
      shareUrl: `${process.env.NEXT_PUBLIC_APP_URL}/share/${type}/${id}`,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: shareData,
      message: '分享链接生成成功'
    });
  } catch (error) {
    console.error('Error in share route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : '分享失败'
      },
      { status: 500 }
    );
  }
} 