'use client';

import React, { useState } from 'react';

const promptCategories = [
  {
    name: '场景',
    prompts: [
      {
        title: '童话小镇',
        content: '一个充满魔法的小镇，有着红色的屋顶和蜿蜒的小路，远处是连绵的山脉，吉卜力风格',
        tags: ['风景', '建筑', '自然']
      },
      {
        title: '森林小屋',
        content: '森林深处的一间小木屋，周围有萤火虫和野花，吉卜力风格',
        tags: ['自然', '建筑', '夜景']
      },
      {
        title: '海边港口',
        content: '阳光明媚的海港，停泊着各种木质帆船，远处有灯塔，吉卜力风格',
        tags: ['海洋', '建筑', '交通']
      }
    ]
  },
  {
    name: '角色',
    prompts: [
      {
        title: '少女冒险家',
        content: '戴着大草帽的少女，穿着简单的连衣裙，背着帆布包，吉卜力风格',
        tags: ['人物', '少女', '冒险']
      },
      {
        title: '神秘老人',
        content: '留着长胡子的老人，穿着朴素的衣服，眼神温和，吉卜力风格',
        tags: ['人物', '老人', '神秘']
      }
    ]
  },
  {
    name: '物品',
    prompts: [
      {
        title: '魔法书',
        content: '一本古老的魔法书，封面有神秘符号，散发着微光，吉卜力风格',
        tags: ['道具', '魔法', '书籍']
      },
      {
        title: '飞行器',
        content: '一台蒸汽朋克风格的飞行器，有着木质零件和铜管装饰，吉卜力风格',
        tags: ['机械', '交通', '科技']
      }
    ]
  }
];

export default function PromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(promptCategories[0].name);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrompts = promptCategories
    .find((category) => category.name === selectedCategory)
    ?.prompts.filter((prompt) =>
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ) || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">提示词库</h1>
          <p className="mt-2 text-lg text-gray-600">
            精选的吉卜力风格提示词，帮助你创作出更好的作品。
          </p>

          <div className="mt-8">
            <div className="flex space-x-4">
              <input
                type="text"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="搜索提示词..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="mt-4 flex space-x-4">
              {promptCategories.map((category) => (
                <button
                  key={category.name}
                  className={`rounded-lg px-4 py-2 font-medium ${
                    selectedCategory === category.name
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-6">
              {filteredPrompts.map((prompt) => (
                <div
                  key={prompt.title}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{prompt.title}</h3>
                  <p className="mt-2 text-gray-600">{prompt.content}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
                    onClick={() => {
                      navigator.clipboard.writeText(prompt.content);
                    }}
                  >
                    复制提示词
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 