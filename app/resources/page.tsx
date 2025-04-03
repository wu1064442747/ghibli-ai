<<<<<<< HEAD
'use client';

import React from 'react';

const resources = [
  {
    title: '龙猫',
    description: '宫崎骏的经典作品，讲述了小月和小梅搬到乡下后遇见森林之灵龙猫的故事。',
    imageUrl: '/images/totoro.jpg',
    category: '电影',
    year: '1988',
  },
  {
    title: '千与千寻',
    description: '讲述了千寻意外进入神灵世界后的奇幻冒险。',
    imageUrl: '/images/spirited-away.jpg',
    category: '电影',
    year: '2001',
  },
  {
    title: '哈尔的移动城堡',
    description: '一个关于魔法、战争和爱情的故事。',
    imageUrl: '/images/howls-moving-castle.jpg',
    category: '电影',
    year: '2004',
  },
=======
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
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
];

const tutorials = [
  {
<<<<<<< HEAD
    title: '吉卜力动画中的自然元素',
    description: '探索宫崎骏作品中常见的自然主题和元素。',
    duration: '10分钟',
    level: '入门',
  },
  {
    title: '角色设计技巧',
    description: '学习吉卜力风格的角色设计原则。',
    duration: '15分钟',
    level: '进阶',
  },
  {
    title: '场景构图指南',
    description: '掌握吉卜力动画中的场景构图方法。',
    duration: '20分钟',
    level: '高级',
  },
=======
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
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
];

export default function ResourcesPage() {
  return (
<<<<<<< HEAD
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">资源中心</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">经典作品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="card hover:bg-gray-700 transition-colors"
            >
              <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-800">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  [图片占位符]
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-400 mb-2">{resource.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">{resource.category}</span>
                <span>{resource.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">创作指南</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.title}
              className="card hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-gray-400 mb-4">{tutorial.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">时长：{tutorial.duration}</span>
                <span>难度：{tutorial.level}</span>
              </div>
            </div>
          ))}
=======
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

          {/* 下载资源 */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">素材下载</h2>
            <div className="mt-6 rounded-lg bg-white p-6 shadow">
              <div className="divide-y divide-gray-200">
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">吉卜力风格笔刷</h3>
                    <p className="mt-1 text-sm text-gray-500">用于数字绘画的专业笔刷集</p>
                  </div>
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    下载
                  </button>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">场景模板</h3>
                    <p className="mt-1 text-sm text-gray-500">常用场景构图参考</p>
                  </div>
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    下载
                  </button>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">色彩调色板</h3>
                    <p className="mt-1 text-sm text-gray-500">吉卜力风格配色方案</p>
                  </div>
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    下载
                  </button>
                </div>
              </div>
            </div>
          </section>
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
        </div>
      </div>
    </div>
  );
} 