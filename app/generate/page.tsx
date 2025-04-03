'use client';

import React, { useState } from 'react';
import { useGenerateStore } from '@/lib/store';
import { generateImage } from '@/lib/api';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('ghibli');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const addGeneratedImage = useGenerateStore((state) => state.addGeneratedImage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await generateImage({ prompt, style });
      
      if (result.success && result.data) {
        addGeneratedImage(result.data);
        setPrompt('');
      } else {
        setError(result.message || '生成失败，请重试');
      }
    } catch (err) {
      setError('生成过程中发生错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">吉卜力风格图片生成</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
              描述你想要生成的图片
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="例如：一个小女孩在森林中遇到了一只可爱的龙..."
              required
            />
          </div>

          <div>
            <label htmlFor="style" className="block text-sm font-medium text-gray-700">
              选择风格
            </label>
            <select
              id="style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="ghibli">吉卜力动画风格</option>
              <option value="watercolor">水彩画风格</option>
              <option value="anime">动漫风格</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
            >
              {loading ? '生成中...' : '生成图片'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
} 