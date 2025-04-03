'use client';

import React, { useState } from 'react';

const promptCategories = [
  {
    name: '场景',
    prompts: [
      {
        title: '魔法森林',
        content: '一片神秘的森林，巨大的树木间点缀着发光的蘑菇和萤火虫，远处有一座古老的树屋',
        tags: ['自然', '魔法', '夜晚'],
      },
      {
        title: '童话小镇',
        content: '一个充满魔法的小镇，有着红色的屋顶和蜿蜒的小路，远处是连绵的山脉，吉卜力风格',
        tags: ['风景', '建筑', '自然'],
      },
      {
        title: '海边港口',
        content: '阳光明媚的海港，帆船停靠在码头，海鸥在蓝天中翱翔，吉卜力风格',
        tags: ['海洋', '建筑', '交通'],
      },
    ],
  },
  {
    name: '角色',
    prompts: [
      {
        title: '森林守护者',
        content: '一位年轻的森林守护者，穿着绿色长袍，手持魔法木杖，头戴树叶编织的王冠',
        tags: ['人物', '魔法', '自然'],
      },
      {
        title: '机械师少女',
        content: '一位戴着护目镜的少女机械师，身穿工装背带裤，周围是各种齿轮和工具',
        tags: ['人物', '科技', '工作'],
      },
    ],
  },
  {
    name: '物品',
    prompts: [
      {
        title: '魔法书',
        content: '一本古老的魔法书，封面上有神秘符文，书页边缘泛着金色光芒',
        tags: ['道具', '魔法', '神秘'],
      },
      {
        title: '飞行器',
        content: '一台复古风格的飞行器，结合了木制和金属材质，有着优雅的线条设计',
        tags: ['交通', '科技', '复古'],
      },
    ],
  },
];

export default function PromptsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('场景');

  const filteredPrompts = promptCategories
    .find((category) => category.name === selectedCategory)
    ?.prompts.filter((prompt) =>
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ) || [];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">提示词库</h1>
          <p className="text-slate-300">精选的吉卜力风格提示词，帮助你创作出更好的作品。</p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜索提示词..."
              className="w-full px-4 py-3 pl-10 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex gap-2 mt-4">
            {promptCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition group"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                {prompt.title}
              </h3>
              <p className="text-slate-300 mb-4">{prompt.content}</p>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 font-medium rounded-lg transition">
                复制提示词
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 