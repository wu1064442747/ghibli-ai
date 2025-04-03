<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465

const promptCategories = [
  {
    name: '场景',
    prompts: [
      {
<<<<<<< HEAD
        title: '魔法森林',
        content: '一片神秘的森林，巨大的树木间点缀着发光的蘑菇和萤火虫，远处有一座古老的树屋',
        tags: ['自然', '魔法', '夜晚'],
      },
      {
        title: '天空城堡',
        content: '漂浮在云端的城堡，周围有飞行的鲸鱼和飞艇，远处是落日的天空',
        tags: ['建筑', '天空', '奇幻'],
      },
      {
        title: '雨中小镇',
        content: '雨天的乡间小镇，石板路上倒映着灯光，屋檐下避雨的人们',
        tags: ['城镇', '雨天', '生活'],
      },
    ],
=======
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
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
  },
  {
    name: '角色',
    prompts: [
      {
<<<<<<< HEAD
        title: '森林守护者',
        content: '一位穿着苔藓和树叶编织衣服的神秘人物，手持发光的法杖',
        tags: ['人物', '魔法', '自然'],
      },
      {
        title: '机械师少女',
        content: '戴着护目镜的少女，身边漂浮着各种齿轮和工具，穿着工装服',
        tags: ['人物', '蒸汽朋克', '科技'],
      },
      {
        title: '猫咪巫师',
        content: '一只戴着巫师帽的黑猫，围着星星图案的披肩，正在施法',
        tags: ['动物', '魔法', '可爱'],
      },
    ],
=======
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
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
  },
  {
    name: '物品',
    prompts: [
      {
        title: '魔法书',
<<<<<<< HEAD
        content: '一本古老的魔法书，封面有神秘符文，周围漂浮着荧光粒子',
        tags: ['道具', '魔法', '书籍'],
      },
      {
        title: '飞行扫帚',
        content: '一把装饰着花朵和藤蔓的魔法扫帚，尾部散发着星光',
        tags: ['道具', '魔法', '飞行'],
      },
      {
        title: '水晶球',
        content: '一个放置在雕花底座上的水晶球，内部有云雾缭绕的景象',
        tags: ['道具', '魔法', '神秘'],
      },
    ],
  },
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">提示词库</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <input
            type="text"
            className="input-field"
            placeholder="搜索提示词..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-8 flex space-x-4">
          {promptCategories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.title}
              className="card hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{prompt.title}</h3>
              <p className="text-gray-400 mb-4">{prompt.content}</p>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700 text-sm text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-4 btn-secondary w-full"
                onClick={() => {
                  navigator.clipboard.writeText(prompt.content);
                }}
              >
                复制提示词
              </button>
            </div>
          ))}
=======
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
                placeholder="搜索提示词..."
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                搜索
              </button>
            </div>

            <div className="mt-8 space-y-12">
              {promptCategories.map((category) => (
                <div key={category.name}>
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {category.prompts.map((prompt) => (
                      <div
                        key={prompt.title}
                        className="rounded-lg bg-white p-6 shadow"
                      >
                        <h3 className="text-lg font-medium text-gray-900">{prompt.title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{prompt.content}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {prompt.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            复制提示词
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
        </div>
      </div>
    </div>
  );
} 