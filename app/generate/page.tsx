<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import { generateImage } from '../lib/api';

const styles = [
  { id: 'ghibli', name: '吉卜力风格', description: '宫崎骏动画风格' },
  { id: 'watercolor', name: '水彩风格', description: '柔和的水彩画风格' },
  { id: 'anime', name: '动漫风格', description: '日式动漫风格' },
];

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('ghibli');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt) {
      setError('请输入提示词');
      return;
    }

    try {
      setIsGenerating(true);
      setError('');
      const result = await generateImage({ prompt, style: selectedStyle });
      if (result.success && result.data) {
        setGeneratedImage(result.data.imageUrl);
      } else {
        setError(result.message || '生成失败，请重试');
      }
    } catch (err) {
      setError('生成过程中发生错误，请重试');
=======
import React, { useState } from 'react';
import { useGenerateStore } from '@/lib/store';
import { generateImage } from '@/lib/api';

export default function GeneratePage() {
  const { prompt, style, setPrompt, setStyle, isGenerating, setIsGenerating, generatedImages, addGeneratedImage } = useGenerateStore();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setError(null);

    try {
      const response = await generateImage({ prompt, style });
      if (response.success && response.data) {
        addGeneratedImage(response.data.imageUrl);
      } else {
        setError(response.message || '生成失败');
      }
    } catch (err) {
      setError('生成过程中发生错误');
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
    } finally {
      setIsGenerating(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">AI 图片生成</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <label htmlFor="prompt" className="block text-sm font-medium mb-2">
            描述你想要生成的图片
          </label>
          <textarea
            id="prompt"
            rows={4}
            className="input-field"
            placeholder="例如：一个小女孩在森林中遇见了龙猫..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">选择风格</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {styles.map((style) => (
              <button
                key={style.id}
                className={`p-4 rounded-lg border-2 text-left ${
                  selectedStyle === style.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                onClick={() => setSelectedStyle(style.id)}
              >
                <h3 className="font-medium mb-1">{style.name}</h3>
                <p className="text-sm text-gray-400">{style.description}</p>
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
            {error}
          </div>
        )}

        <div className="mb-8">
          <button
            className="btn-primary w-full"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? '生成中...' : '生成图片'}
          </button>
        </div>

        {generatedImage && (
          <div className="rounded-lg overflow-hidden">
            <img
              src={generatedImage}
              alt="生成的图片"
              className="w-full h-auto"
            />
          </div>
        )}
=======
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">吉卜力风格图片生成</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
                描述你想要生成的场景
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={4}
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="ghibli">吉卜力风格</option>
                <option value="spirited-away">千与千寻风格</option>
                <option value="totoro">龙猫风格</option>
                <option value="howl">哈尔的移动城堡风格</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isGenerating ? '生成中...' : '生成图片'}
            </button>
          </form>
          {error && (
            <div className="mt-4 text-red-600 text-center">
              {error}
            </div>
          )}
          {generatedImages.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">生成结果</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedImages.map((imageUrl, index) => (
                  <div key={index} className="relative aspect-square">
                    <img
                      src={imageUrl}
                      alt={`Generated image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
      </div>
    </div>
  );
} 