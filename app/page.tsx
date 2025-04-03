'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          吉卜力风格 AI 创作平台
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          使用 AI 技术创造属于你的吉卜力风格艺术作品
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link
            href="/generate"
            className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">图片生成</h2>
            <p className="text-gray-600 mb-4">
              输入文字描述，生成吉卜力风格的精美图片
            </p>
            <span className="text-indigo-600 group-hover:text-indigo-700">
              开始创作 →
            </span>
          </Link>

          <Link
            href="/characters"
            className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">角色创建</h2>
            <p className="text-gray-600 mb-4">
              设计并生成独特的吉卜力风格角色
            </p>
            <span className="text-indigo-600 group-hover:text-indigo-700">
              创建角色 →
            </span>
          </Link>

          <Link
            href="/resources"
            className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">资源中心</h2>
            <p className="text-gray-600 mb-4">
              探索吉卜力动画的艺术特点和创作技巧
            </p>
            <span className="text-indigo-600 group-hover:text-indigo-700">
              浏览资源 →
            </span>
          </Link>

          <Link
            href="/prompts"
            className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">提示词库</h2>
            <p className="text-gray-600 mb-4">
              收集整理优质的提示词，帮助创作更好的作品
            </p>
            <span className="text-indigo-600 group-hover:text-indigo-700">
              查看提示词 →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 