'use client';

import React from 'react';
import Image from 'next/image';

export default function ResourcesPage() {
  const classicWorks = [
    {
      id: 1,
      title: '千与千寻',
      description: '一个少女在神秘世界中寻找自我的成长故事。',
      imageUrl: '/images/spirited-away.jpg',
      year: '2001',
    },
    {
      id: 2,
      title: '龙猫',
      description: '两姐妹与森林精灵的奇妙冒险。',
      imageUrl: '/images/totoro.jpg',
      year: '1988',
    },
    {
      id: 3,
      title: '哈尔的移动城堡',
      description: '一个关于爱、魔法和战争的浪漫故事。',
      imageUrl: '/images/howls-moving-castle.jpg',
      year: '2004',
    },
  ];

  const tutorials = [
    {
      id: 1,
      title: '吉卜力风格绘画基础',
      description: '学习宫崎骏动画中的基本绘画技巧。',
      difficulty: '入门',
      duration: '2小时',
    },
    {
      id: 2,
      title: '角色设计进阶',
      description: '深入探讨吉卜力角色的设计原则。',
      difficulty: '中级',
      duration: '3小时',
    },
    {
      id: 3,
      title: '场景构建大师班',
      description: '掌握吉卜力风格场景的创作方法。',
      difficulty: '高级',
      duration: '4小时',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">资源中心</h1>
          <p className="text-gray-600">探索吉卜力的经典作品和学习资源。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">经典作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classicWorks.map((work) => (
              <div key={work.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 text-white text-sm rounded">
                    {work.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">教程资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    tutorial.difficulty === '入门'
                      ? 'bg-green-100 text-green-800'
                      : tutorial.difficulty === '中级'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">{tutorial.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600">{tutorial.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 