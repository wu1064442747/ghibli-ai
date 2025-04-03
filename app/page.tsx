'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            吉卜力风格 AI 创作平台
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            使用 AI 技术创造属于你的吉卜力魔法世界
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 图片生成 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">图片生成</h3>
              <p className="text-gray-600 mb-4">
                输入文字描述，生成吉卜力风格的精美图片
              </p>
              <Link 
                href="/generate" 
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                开始创作 →
              </Link>
            </div>
          </div>

          {/* 角色创建 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">角色创建</h3>
              <p className="text-gray-600 mb-4">
                设计并生成独特的吉卜力风格角色
              </p>
              <Link 
                href="/characters" 
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                创建角色 →
              </Link>
            </div>
          </div>

          {/* 资源中心 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">资源中心</h3>
              <p className="text-gray-600 mb-4">
                探索吉卜力艺术特点及创作技巧
              </p>
              <Link 
                href="/resources" 
                className="inline-block bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
              >
                浏览资源 →
              </Link>
            </div>
          </div>

          {/* 提示词库 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">提示词库</h3>
              <p className="text-gray-600 mb-4">
                收集优质提示词，提升创作效果
              </p>
              <Link 
                href="/prompts" 
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                查看提示词 →
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            平台特色
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">高质量生成</h3>
              <p className="text-gray-600">专业的吉卜力风格模型，生成精美图片</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">简单易用</h3>
              <p className="text-gray-600">直观的界面设计，轻松创作精美作品</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">丰富资源</h3>
              <p className="text-gray-600">大量优质提示词和创作参考资源</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 