'use client';

import React from 'react';
import Image from 'next/image';

const resources = [
  {
    title: '天空之城',
    description: '一个漂浮在空中的神秘城市，充满了科技与魔法的元素。',
    imageUrl: '/images/castle.jpg',
    category: '电影',
    year: '1986'
  },
  {
    title: '龙猫',
    description: '可爱的森林精灵，带来欢乐与温暖的故事。',
    imageUrl: '/images/totoro.jpg',
    category: '电影',
    year: '1988'
  },
  {
    title: '千与千寻',
    description: '少女千寻在神秘世界的冒险故事。',
    imageUrl: '/images/spirited.jpg',
    category: '电影',
    year: '2001'
  }
];

const tutorials = [
  {
    title: '吉卜力风格绘画基础',
    description: '学习吉卜力工作室特有的绘画技巧和风格要素。',
    duration: '30分钟',
    level: '入门'
  },
  {
    title: '角色设计技巧',
    description: '如何创造富有个性的吉卜力风格角色。',
    duration: '45分钟',
    level: '中级'
  },
  {
    title: '场景构建详解',
    description: '打造充满魔法感的吉卜力场景。',
    duration: '60分钟',
    level: '进阶'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">资源中心</h1>
          <p className="mt-2 text-lg text-gray-600">
            探索吉卜力的艺术世界，获取创作灵感和学习资源。
          </p>

          {/* 作品展示 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">经典作品</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="overflow-hidden rounded-lg bg-white shadow"
                >
                  <div className="relative h-48">
                    {/* 这里需要添加实际的图片 */}
                    <div className="absolute inset-0 bg-gray-200" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {resource.category}
                      </span>
                      <span className="text-sm text-gray-500">{resource.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 教程资源 */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">创作教程</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tutorials.map((tutorial) => (
                <div
                  key={tutorial.title}
                  className="overflow-hidden rounded-lg bg-white p-6 shadow"
                >
                  <h3 className="text-lg font-medium text-gray-900">{tutorial.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{tutorial.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{tutorial.duration}</span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 