'use client';

import React from 'react';
import Image from 'next/image';

const resources = [
  {
    title: '天空之城',
    description: '一个漂浮在空中的神秘城市，充满了科技与魔法的元素。',
    category: '电影',
    year: '1986',
    imageUrl: '/castle.jpg',
  },
  {
    title: '龙猫',
    description: '可爱的森林精灵与小女孩的奇幻冒险故事。',
    category: '电影',
    year: '1988',
    imageUrl: '/totoro.jpg',
  },
  {
    title: '千与千寻',
    description: '少女千寻在神秘世界的奇幻冒险。',
    category: '电影',
    year: '2001',
    imageUrl: '/spirited.jpg',
  },
];

const tutorials = [
  {
    title: '吉卜力风格基础',
    description: '学习吉卜力动画特有的绘画技巧和风格要素。',
    duration: '30分钟',
    level: '入门',
  },
  {
    title: '角色设计技巧',
    description: '如何创造富有个性和魅力的吉卜力风格角色。',
    duration: '45分钟',
    level: '中级',
  },
  {
    title: '场景构建详解',
    description: '打造充满魔法和想象力的吉卜力场景。',
    duration: '60分钟',
    level: '进阶',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">资源中心</h1>
          <p className="text-slate-300">探索吉卜力的艺术世界，获取创作灵感和学习资源。</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">经典作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group"
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition" />
                  <Image
                    src={resource.imageUrl}
                    alt={resource.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-slate-300 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                      {resource.year}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 transition">
                      电影详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8">创作教程</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${tutorial.level === '入门' ? 'bg-green-500/20 text-green-400' :
                      tutorial.level === '中级' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'}`}
                  >
                    {tutorial.level}
                  </span>
                  <span className="text-slate-400 text-sm">{tutorial.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                <p className="text-slate-300 mb-4">{tutorial.description}</p>
                <button className="w-full px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 font-medium rounded-lg transition">
                  开始学习
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 