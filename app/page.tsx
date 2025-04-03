'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">吉卜力风格 AI 创作平台</h1>
          <p className="text-xl text-gray-600">
            使用 AI 技术创造属于你的吉卜力风格艺术作品
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/generate" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">图片生成</h2>
                <p className="text-gray-600">
                  输入文字描述，生成吉卜力风格的精美图片
                </p>
              </div>
            </div>
          </Link>

          <Link href="/characters" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">角色创建</h2>
                <p className="text-gray-600">
                  创建独特的吉卜力风格角色，包括性格和背景故事
                </p>
              </div>
            </div>
          </Link>

          <Link href="/resources" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">资源中心</h2>
                <p className="text-gray-600">
                  探索吉卜力动画的艺术特点和创作技巧
                </p>
              </div>
            </div>
          </Link>

          <Link href="/prompts" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">提示词库</h2>
                <p className="text-gray-600">
                  浏览和使用精心设计的提示词，创作更好的作品
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 