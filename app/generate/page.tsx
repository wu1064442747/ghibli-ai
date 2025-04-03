'use client';

import React, { useState } from 'react';
import { useGenerateStore } from '@/lib/store';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('ghibli');
  const { isGenerating, generatedImages, generateImage } = useGenerateStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateImage({ prompt, style });
    setPrompt('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">生成吉卜力风格图片</h1>
          <p className="text-gray-600">探索吉卜力的艺术世界，创造属于你的魔法时刻。</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="描述你想要生成的图片场景，例如：一个宫崎骏风格的温馨小镇，有红色的屋顶和蜿蜒的小路，远处是连绵的山脉..."
                className="w-full h-32 px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="flex gap-4">
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="ghibli">吉卜力风格</option>
                <option value="anime">动漫风格</option>
                <option value="watercolor">水彩风格</option>
              </select>

              <button
                type="submit"
                disabled={isGenerating || !prompt}
                className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
              >
                {isGenerating ? '生成中...' : '生成图片'}
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">生成的图片</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generatedImages.map((image, index) => (
              <div key={image.id || index} className="relative group">
                <div className="aspect-square overflow-hidden rounded-xl bg-white shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.imageUrl}
                    alt={image.prompt || '生成的图片'}
                    className="w-full h-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition">
                  <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-sm text-white line-clamp-2">{image.prompt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 