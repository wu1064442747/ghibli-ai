'use client';

import React, { useState } from 'react';

export default function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', '场景', '角色', '氛围', '风格'];

  const prompts = [
    {
      id: 1,
      title: '宫崎骏风格的乡村小镇',
      description: '一个宁静的小镇，有红色的屋顶和蜿蜒的小路，远处是连绵的山脉，天空中飘着蓬松的白云。',
      category: '场景',
      tags: ['乡村', '自然', '建筑'],
    },
    {
      id: 2,
      title: '神秘的森林精灵',
      description: '一个可爱的森林精灵，有着大大的眼睛和毛茸茸的身体，散发着柔和的光芒。',
      category: '角色',
      tags: ['精灵', '可爱', '魔法'],
    },
    {
      id: 3,
      title: '雨天的魔法咖啡馆',
      description: '一个温馨的咖啡馆，窗外下着小雨，室内有温暖的灯光和悬浮的魔法物品。',
      category: '场景',
      tags: ['室内', '雨天', '魔法'],
    },
  ];

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesCategory = selectedCategory === '全部' || prompt.category === selectedCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">提示词库</h1>
          <p className="text-gray-600">探索精心设计的提示词，创造独特的吉卜力风格作品。</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索提示词..."
              className="flex-1 px-4 py-2 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredPrompts.map((prompt) => (
            <div key={prompt.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{prompt.title}</h3>
                  <p className="text-gray-600 mb-4">{prompt.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {prompt.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition"
                  onClick={() => {
                    // 复制提示词到剪贴板
                    navigator.clipboard.writeText(prompt.description);
                  }}
                >
                  复制
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 