'use client';

import React, { useState } from 'react';
import { useGenerateStore } from '@/lib/store';
import { generateImage } from '@/lib/api';

export default function GeneratePage() {
  const {
    prompt,
    style,
    isGenerating,
    generatedImages,
    setPrompt,
    setStyle,
    setIsGenerating,
    addGeneratedImage,
  } = useGenerateStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const result = await generateImage({ prompt, style });

      if (result.success && result.data) {
        addGeneratedImage(result.data.imageUrl);
        setPrompt('');
      }
    } catch (error) {
      console.error('图片生成错误:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">生成吉卜力风格图片</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">图片描述</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows={4}
              placeholder="描述你想要生成的图片场景，例如：一个宫崎骏风格的森林小屋，阳光透过树叶，有小动物在门前玩耍..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">风格选择</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="ghibli">吉卜力风格</option>
              <option value="watercolor">水彩画风格</option>
              <option value="anime">动漫风格</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isGenerating ? '生成中...' : '生成图片'}
          </button>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">生成的图片</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generatedImages.map((image, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.prompt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-600">{image.prompt}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {new Date(image.timestamp).toLocaleString()}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {image.style}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 