'use client';

import React, { useState } from 'react';
import { useGenerateStore } from '@/lib/store';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('ghibli');
  const [error, setError] = useState<string | null>(null);
  const { isGenerating, generatedImages, generateImage } = useGenerateStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('请输入描述文字');
      return;
    }
    
    setError(null);
    try {
      await generateImage({ prompt: prompt.trim(), style });
      setPrompt('');
    } catch (err) {
      setError(err instanceof Error ? err.message : '生成图片时发生错误，请重试');
      console.error('生成图片错误:', err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Generate Ghibli-Style Images</h1>
          <p className="text-gray-600">Explore the artistic world of Ghibli, create your own magical moments.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the scene you want to generate, for example: A cozy Miyazaki-style town with red roofs and winding paths, with mountains in the distance..."
                className="w-full h-32 px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="ghibli">Ghibli Style</option>
                <option value="anime">Anime Style</option>
                <option value="watercolor">Watercolor Style</option>
              </select>

              <button
                type="submit"
                disabled={isGenerating || !prompt}
                className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    生成中...
                  </>
                ) : (
                  '生成图片'
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Generated Images</h2>
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